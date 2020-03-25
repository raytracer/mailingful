package main

import (
	"database/sql"
	"errors"
	"io"
	"log"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	"github.com/gin-gonic/gin"
	"github.com/olivere/elastic"
	gomail "gopkg.in/gomail.v2"
	q "mailingful.com/mailingful-server/queries"
)

func sendDraftHandler(c *gin.Context) {
	claims, err := getClaims(c)
	if err != nil {
		c.JSON(401, q.Response{Error: err.Error()})
		return
	}
	var query q.GetContent
	account := claims.Account
	db, err := newClient()
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}
	es, err := newESClient()
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}
	if err := c.ShouldBindJSON(&query); err == nil {
		if !isMyMail(db, query.MailId, account) {
			c.JSON(403, q.Response{Error: errors.New("Not your Mail")})
			return
		}
		err = sendDraft(db, es, query, account)
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: true})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func sendDraft(db *sql.DB, es *elastic.Client, getContent q.GetContent, accountId string) error {
	accounts, err := getExternalAccountsAllData(db, accountId)
	if err != nil {
		return err
	} else {
		envelope, err := getEnvelope(db, accountId, getContent)
		if err != nil {
			return err
		}
		for _, externalAccount := range accounts {
			if externalAccount.Protocol == "SMTP" && externalAccount.Username == envelope.From {
				content, err := getMailContent(db, accountId, getContent)
				if err != nil {
					return err
				}
				err = sendMailExternal(envelope, content, externalAccount)
				if err != nil {
					return err
				}

				return moveToFolder(db, es, "folder:sent", getContent.MailId)
			}
		}
		return errors.New("No (external) account found")
	}
}

func sendMailExternal(envelope *q.Envelope, content *q.MailContent, account q.ExternalAccount) error {
	m := gomail.NewMessage()
	m.SetHeader("From", envelope.From)
	m.SetHeader("To", envelope.To)
	m.SetHeader("Subject", envelope.Subject)
	m.SetBody("text/html", content.HtmlBody)
	m.AddAlternative("text/plain", content.TextBody)
	for _, attachment := range content.Attachments {
		m.Attach(attachment.Name, gomail.SetCopyFunc(func(w io.Writer) error {
			sess, err := newAWSSession()
			if err != nil {
				return err
			}

			downloader := s3manager.NewDownloader(sess)

			params := &s3.GetObjectInput{
				Bucket: aws.String("mailingful-attachment"),
				Key:    aws.String(attachment.S3Key),
			}
			buf := aws.NewWriteAtBuffer([]byte{})
			_, err = downloader.Download(buf, params)

			if err != nil {
				return err
			}

			w.Write(buf.Bytes())

			return nil
		}))
	}
	d := gomail.NewDialer(account.Host, account.Port, account.Username, account.Password)

	// Send the email to Bob, Cora and Dan.
	if err := d.DialAndSend(m); err != nil {
		return err
	}

	return nil
}

func scheduleDraftHandler(c *gin.Context) {
	var query q.GetContent
	claims, err := getClaims(c)
	if err != nil {
		c.JSON(401, q.Response{Error: err.Error()})
		return
	}
	account := claims.Account
	db, err := newClient()
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}
	es, err := newESClient()
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}
	if err := c.ShouldBindJSON(&query); err == nil {
		if !isMyMail(db, query.MailId, account) {
			c.JSON(403, q.Response{Error: errors.New("Not your Mail")})
			return
		}
		err = scheduleDraft(db, es, query)
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: true})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func scheduleDraft(db *sql.DB, es *elastic.Client, getContent q.GetContent) error {
	return moveToFolder(db, es, "folder:scheduled", getContent.MailId)
}

func sendScheduled() error {
	db, err := newClient()
	if err != nil {
		return err
	}
	es, err := newESClient()
	if err != nil {
		return err
	}

	type MailAndAccount struct {
		mailId    string
		accountId string
	}

	collection := make([]MailAndAccount, 0)

	{
		rows, err := db.Query("SELECT mails.Id, accounts.Id FROM mails, labels, accounts WHERE mails.AccountId = accounts.Id AND mails.Date < $1 AND labels.MailId = mails.Id AND labels.Name = 'folder:scheduled'", time.Now())

		defer rows.Close()

		if err != nil {
			return err
		}

		for rows.Next() {
			var mailAndAccount MailAndAccount
			rows.Scan(&mailAndAccount.mailId, &mailAndAccount.accountId)
			collection = append(collection, mailAndAccount)
		}

	}

	for _, mailAndAccount := range collection {
		err := sendDraft(db, es, q.GetContent{MailId: mailAndAccount.mailId}, mailAndAccount.accountId)

		if err != nil {
			//continue despite single mail failing
			log.Println(err.Error())
		}
	}

	return nil
}

func sendScheduledWrapper() {
	ticker := time.NewTicker(time.Minute)
	quit := make(chan struct{})
	go func() {
		for {
			select {
			case <-ticker.C:
				err := sendScheduled()
				if err != nil {
					log.Println(err.Error())
				}
			case <-quit:
				ticker.Stop()
				return
			}
		}
	}()
}
