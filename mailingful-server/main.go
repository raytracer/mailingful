package main

import (
	"context"
	"database/sql"
	"errors"
	"log"
	"net/http"
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/olivere/elastic"
	"golang.org/x/crypto/bcrypt"

	q "mailingful.com/mailingful-server/queries"

	_ "github.com/lib/pq"
)

//go:generate go run scripts/readsql.go

var secret = "your-secret"
var r = regexp.MustCompile(`(.*)@mailingful.com$`)

func newClient() (*sql.DB, error) {
	db, err := sql.Open("postgres", "postgresql://mailingful@roach1:26257/mailingful?sslmode=disable")
	if err != nil {
		return nil, err
	}

	return db, nil
}

func newESClient() (*elastic.Client, error) {
	client, err := elastic.NewClient(elastic.SetURL("http://elastic:9200"))
	if err != nil {
		return nil, err
	}

	return client, nil
}

func newAWSSession() (*session.Session, error) {
	return session.NewSession(&aws.Config{
		Region:      aws.String("eu-west-1"),
		Credentials: credentials.NewStaticCredentials("your", "credentials", ""),
	})
}

func buildSchema(db *sql.DB) {
	if _, err := db.Exec(
		schema); err != nil {
		log.Fatal(err)
	}
}

func insertAttachmentSQL(db *sql.DB, mailId string, attachment *q.Attachment) error {
	if _, err := db.Exec(
		insertattachment, mailId, attachment.Name, attachment.MimeType, attachment.S3Key, attachment.Size); err != nil {
		return err
	}

	return nil
}

func deleteAttachmentSQL(db *sql.DB, mailId string, s3key string) error {
	if _, err := db.Exec(
		deleteattachment, mailId, s3key); err != nil {
		return err
	}

	return nil
}

func insertLabel(db *sql.DB, mailId string, label string) error {
	_, err := db.Query(
		insertlabel,
		mailId,
		label,
	)

	if err != nil {
		return err
	}

	return nil
}

func getAttachmentURLHandler(c *gin.Context) {
	s3Key := c.Param("s3Key")

	sess, err := newAWSSession()
	if err != nil {
		c.Error(err)
		return
	}

	downloader := s3manager.NewDownloader(sess)

	params := &s3.GetObjectInput{
		Bucket: aws.String("mailingful-attachment"),
		Key:    aws.String(s3Key),
	}
	buf := aws.NewWriteAtBuffer([]byte{})
	_, err = downloader.Download(buf, params)

	if err != nil {
		c.Error(err)
		return
	}

	input := &s3.HeadObjectInput{
		Bucket: aws.String("mailingful-attachment"),
		Key:    aws.String(s3Key),
	}

	svc := s3.New(sess)
	result, err := svc.HeadObject(input)

	log.Println(len(buf.Bytes()))
	log.Println(*result.ContentType)

	c.Writer.Header().Set("Content-Type", *result.ContentType)
	c.Writer.Write(buf.Bytes())
}

func insertPromotionHandler(c *gin.Context) {
	var query q.InsertPromotion

	if err := c.ShouldBindJSON(&query); err == nil {
		db, err := newClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		_, err = db.Query(insertpromotion, query.Email)
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: true})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func healthHandler(c *gin.Context) {
	c.JSON(200, true)
}

func loginHandler(c *gin.Context) {
	var query q.Login

	if err := c.ShouldBindJSON(&query); err == nil {
		db, err := newClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		matches := r.FindStringSubmatch(query.Username)

		if len(matches) < 2 {
			c.JSON(401, q.Response{Error: "Not a valid username"})
			return
		}

		account, err := getAccountIDForPrefix(db, matches[1])
		if err == nil {
			hash, err := getPasswordHashForAccount(db, account)
			user := q.User{
				Account: account,
				StandardClaims: jwt.StandardClaims{
					ExpiresAt: time.Now().AddDate(0, 0, 1).Unix(),
					IssuedAt:  time.Now().Unix(),
					Issuer:    "api.mailingful.com",
					Subject:   "MailingfulSession",
				},
			}
			token := jwt.NewWithClaims(jwt.GetSigningMethod("HS256"), user)
			err = bcrypt.CompareHashAndPassword([]byte(hash), []byte(query.Password))
			if err != nil {
				c.JSON(401, q.Response{Error: err.Error()})
				return
			}
			var tokenResponse struct {
				Token string `json:"token"`
			}
			tokenString, err := token.SignedString([]byte(secret))

			if err != nil {
				c.JSON(401, q.Response{Error: err.Error()})
				return
			}
			tokenResponse.Token = tokenString
			c.JSON(200, tokenResponse)
		} else {
			c.JSON(401, q.Response{Error: "Invalid username or password!"})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func getClaims(c *gin.Context) (q.User, error) {
	header := c.GetHeader("Authorization")
	token := strings.Replace(header, "Bearer ", "", 1)
	user := q.User{}
	parsed, err := jwt.ParseWithClaims(token, &user, func(token *jwt.Token) (interface{}, error) {
		return []byte(secret), nil
	})

	if err != nil || !parsed.Valid {
		return user, err
	} else if parsed.Claims.Valid() != nil {
		return user, errors.New("invalid token")
	} else {
		return user, nil
	}
}

func jwtAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		_, err := getClaims(c)

		if err != nil {
			c.AbortWithStatusJSON(401, q.Response{Error: err.Error()})
			return
		}
	}
}

func main() {
	port := os.Getenv("PORT")
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	if port == "" {
		port = "9876"
	}

	ctx := context.Background()
	es, err := newESClient()
	if err != nil {
		log.Panic(err)
	}
	exists, err := es.IndexExists("mails").Do(ctx)
	if err != nil {
		log.Panic(err)
	}
	if !exists {
		_, err = es.CreateIndex("mails").BodyString(mapping).Do(ctx)
		if err != nil {
			log.Panic(err)
		}
	}
	es.Stop()

	db, err := newClient()
	if err != nil {
		log.Panic(err)
	}

	buildSchema(db)
	initialAccount(db)

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"https://mailingful.com", "http://localhost:8080"}
	config.AllowHeaders = []string{"Origin", "Authorization", "Content-Type"}
	r.Use(cors.New(config))

	public := r.Group("/v1")
	public.Use()
	{
		public.POST("/login", loginHandler)
		public.GET("/attachments/download/:s3Key", getAttachmentURLHandler)
		public.GET("/health", healthHandler)
		public.POST("/promotions/insert", insertPromotionHandler)
	}

	auth := r.Group("/v1")
	auth.Use(jwtAuth())
	{
		auth.POST("/mails/get", getMailsHandler)
		auth.POST("/mails/envelope", getEnvelopeHandler)
		auth.POST("/mails/content", getMailContentHandler)
		auth.POST("/mails/markseen", setMailSeenHandler)
		auth.POST("/mails/movetofolder", moveToFolderHandler)
		auth.POST("/drafts/create", insertDraftHandler)
		auth.POST("/drafts/send", sendDraftHandler)
		auth.POST("/drafts/schedule", scheduleDraftHandler)
		auth.POST("/attachments/create", createNewAttachmentHandler)
		auth.POST("/attachments/delete", deleteExistingAttachmentHandler)
		auth.POST("/accounts/get", getExternalAccountsHandler)
	}

	lambda := r.Group("/v1")
	{
		lambda.POST("/accounts/id", getAccountIDForPrefixHandler)
		lambda.POST("/mails/insert", insertNewMailHandler)
	}

	scheduleCleanUp()
	sendScheduledWrapper()

	err = http.ListenAndServe("0.0.0.0:"+port, r)
	if err != nil {
		log.Panic(err)
	}
}
