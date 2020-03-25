package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/mail"
	"os"
	"time"

	q "mailingful.com/mailingful-server/queries"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	"github.com/jhillyerd/enmime"
	uuid "github.com/satori/go.uuid"
)

var base = "http://devops.raytracer.me:9876"

func exitErrorf(msg string, args ...interface{}) {
	fmt.Fprintf(os.Stderr, msg+"\n", args...)
	os.Exit(1)
}

func processRecord(sess *session.Session, record events.SimpleEmailRecord) error {
	env, size, err := getMailFromS3(sess, record.SES.Mail.MessageID)

	if err != nil {
		return err
	}

	httpClient := http.Client{
		Timeout: time.Second * 2, // Maximum of 2 secs
	}

	accountId, err := getAccountIDForPrefix(httpClient, "test")

	if err != nil {
		return err
	}

	date := getDate(env)

	mail := q.Envelope{
		From:      env.GetHeader("From"),
		To:        env.GetHeader("To"),
		BCC:       env.GetHeader("Bcc"),
		CC:        env.GetHeader("Cc"),
		Date:      date,
		MessageId: env.GetHeader("Message-ID"),
		InReplyTo: env.GetHeader("In-Reply-To"),
		Subject:   env.GetHeader("Subject"),
		Seen:      false,
		Size:      *size,
		S3Key:     record.SES.Mail.MessageID,
	}

	if err != nil {
		return err
	}

	attachments := make([]q.Attachment, 0)

	for _, attachment := range env.Attachments {
		uuid := uuid.NewV4().String()
		err := uploadAttachmentToS3(sess, attachment.Content, attachment.ContentType, uuid)

		if err != nil {
			return err
		}

		attachments = append(attachments, q.Attachment{
			Name:     attachment.FileName,
			MimeType: attachment.ContentType,
			S3Key:    uuid,
			Size:     len(attachment.Content),
		})
	}

	label := "inbox"

	if record.SES.Receipt.SpamVerdict.Status == "FAIL" || record.SES.Receipt.VirusVerdict.Status == "FAIL" {
		label = "spam"
	}

	insertNewMail(httpClient, q.InsertNewMail{
		AccountId:   accountId,
		Labels:      []string{"folder:" + label},
		Mail:        mail,
		HTMLBody:    env.HTML,
		TextBody:    env.Text,
		Attachments: attachments,
	})

	return err
}

func handleEvent(ctx context.Context, event events.SimpleEmailEvent) error {
	sess, err := session.NewSession(&aws.Config{
		Region:      aws.String("eu-west-1"),
		Credentials: credentials.NewStaticCredentials("your", "credentials", ""),
	})

	if err != nil {
		return err
	}

	for _, record := range event.Records {
		err = processRecord(sess, record)
		if err != nil {
			return err
		}
	}

	return nil
}

func main() {
	lambda.Start(handleEvent)
}

func getDate(env *enmime.Envelope) time.Time {
	date, err := mail.ParseDate(env.GetHeader("Date"))

	if err != nil {
		log.Print(env.GetHeader("Date"))
		log.Print("wrong date format")
		return time.Now()
	}

	return date
}

func getMailFromS3(sess *session.Session, key string) (*enmime.Envelope, *int, error) {
	buff := &aws.WriteAtBuffer{}

	// Create a downloader with the session and default options
	downloader := s3manager.NewDownloader(sess)

	// Create a file to write the S3 Object contents to.
	// Write the contents of S3 Object to the file
	_, err := downloader.Download(buff, &s3.GetObjectInput{
		Bucket: aws.String("mailingful-mime"),
		Key:    aws.String(key),
	})

	if err != nil {
		return nil, nil, err
	}

	// Parse message body with enmime.
	data := buff.Bytes()
	size := len(data)
	env, err := enmime.ReadEnvelope(bytes.NewReader(data))
	if err != nil {
		return nil, nil, err
	}

	return env, &size, nil
}

func uploadAttachmentToS3(sess *session.Session, data []byte, contentType string, key string) error {
	params := &s3.PutObjectInput{
		Bucket:        aws.String("mailingful-attachment"),
		Key:           aws.String(key),
		Body:          bytes.NewReader(data),
		ContentLength: aws.Int64(int64(len(data))),
		ContentType:   aws.String(contentType),
	}
	_, err := s3.New(sess).PutObject(params)

	if err != nil {
		return err
	}

	return nil
}

func getAccountIDForPrefix(httpClient http.Client, prefix string) (string, error) {
	var id string
	req := q.GetAccountId{
		Prefix: prefix,
	}

	res, err := makeHttpRequest(httpClient, req, "/v1/accounts/id")

	if err != nil {
		return id, err
	}

	return res.Payload.(string), nil
}

func insertNewMail(httpClient http.Client, mail q.InsertNewMail) error {
	_, err := makeHttpRequest(httpClient, mail, "/v1/mails/insert")

	return err
}

func makeHttpRequest(httpClient http.Client, in interface{}, url string) (q.Response, error) {
	var response q.Response
	body, err := json.Marshal(in)

	if err != nil {
		return response, err
	}

	req, err := http.NewRequest(http.MethodPost, base+url, bytes.NewBuffer(body))
	if err != nil {
		log.Fatal(err)
	}

	res, getErr := httpClient.Do(req)
	if getErr != nil {
		return response, err
	}

	if res.StatusCode != 200 {
		return response, errors.New("StatusCode was: " + string(res.StatusCode))
	}

	body, readErr := ioutil.ReadAll(res.Body)
	if readErr != nil {
		return response, err
	}

	jsonErr := json.Unmarshal(body, &response)
	if jsonErr != nil {
		return response, jsonErr
	}

	if response.Error != nil {
		return response, errors.New(response.Error.(string))
	}

	return response, nil
}
