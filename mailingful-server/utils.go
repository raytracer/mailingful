package main

import (
	"context"
	"database/sql"
	"log"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/s3"

	"github.com/meirf/gopart"
	"github.com/olivere/elastic"
)

func isMyMail(db *sql.DB, mailId string, accountId string) bool {
	rows, err := db.Query("SELECT Id FROM mails WHERE Id = $1 AND AccountId = $2", mailId, accountId)
	if err != nil {
		log.Println(err.Error())
		return false
	} else {
		return rows.Next()
	}
}

func isSpam(db *sql.DB, mailId string) bool {
	rows, err := db.Query("SELECT mails.Id FROM mails, labels WHERE mails.Id = $1 AND labels.Name = 'folder:spam' AND labels.MailId = mails.Id", mailId)
	if err != nil {
		log.Println(err.Error())
		return false
	} else {
		return rows.Next()
	}
}

func cleanUpMails() error {
	db, err := newClient()
	if err != nil {
		return err
	}
	es, err := newESClient()
	if err != nil {
		return err
	}
	sess, err := newAWSSession()
	if err != nil {
		return err
	}

	attachmentsS3keys := make([]string, 0)

	{
		rows, err := db.Query("SELECT DISTINCT attachments.S3Key from mails, labels, attachments WHERE mails.Date < $1 AND labels.MailId = mails.Id AND attachments.mailId = mails.Id AND (labels.Name = 'folder:spam' OR labels.Name = 'folder:trash')", time.Now().AddDate(0, 0, -1))

		defer rows.Close()

		if err != nil {
			return err
		}

		for rows.Next() {
			var attachmentS3key string
			rows.Scan(&attachmentS3key)
			attachmentsS3keys = append(attachmentsS3keys, attachmentS3key)
		}
	}

	mailsS3Keys := make([]string, 0)

	{
		rows, err := db.Query("DELETE FROM mails WHERE mails.Id in (SELECT DISTINCT mails.Id from mails, labels WHERE mails.Date < $1 AND labels.MailId = mails.Id AND (labels.Name = 'folder:spam' OR labels.Name = 'folder:trash')) RETURNING mails.S3Key", time.Now().AddDate(0, 0, -1))

		defer rows.Close()

		if err != nil {
			return err
		}

		for rows.Next() {
			var mailS3Key string
			if err := rows.Scan(&mailS3Key); err != nil {
				return err
			}

			mailsS3Keys = append(mailsS3Keys, mailS3Key)
		}
	}

	log.Printf("%v", attachmentsS3keys)
	log.Printf("%v", mailsS3Keys)

	ctx := context.Background()

	boolQuery := elastic.NewBoolQuery()
	boolQuery.Must(elastic.NewRangeQuery("Mail.Date").Lt(time.Now().AddDate(0, 0, -1)))
	boolQuery.Should(
		elastic.NewTermQuery("Labels", "folder:trash"),
		elastic.NewTermQuery("Labels", "folder:spam")).MinimumNumberShouldMatch(1)
	_, err = es.DeleteByQuery("mails").Query(boolQuery).Do(ctx)

	if err != nil {
		return err
	}

	{
		attachmentsIds := make([]*s3.ObjectIdentifier, 0)
		for _, s3key := range attachmentsS3keys {
			id := s3.ObjectIdentifier{Key: aws.String(s3key)}
			attachmentsIds = append(attachmentsIds, &id)
		}

		for idxRange := range gopart.Partition(len(attachmentsIds), 1000) {
			ids := attachmentsIds[idxRange.Low:idxRange.High]
			deleteAttachmentsRequest := &s3.DeleteObjectsInput{
				Bucket: aws.String("mailingful-attachment"),
				Delete: &s3.Delete{
					Objects: ids,
					Quiet:   aws.Bool(true),
				},
			}

			if len(ids) > 0 {
				_, err = s3.New(sess).DeleteObjects(deleteAttachmentsRequest)

				if err != nil {
					return err
				}
			}
		}

	}

	{
		mailIds := make([]*s3.ObjectIdentifier, 0)
		for _, s3key := range mailsS3Keys {
			id := s3.ObjectIdentifier{Key: aws.String(s3key)}
			mailIds = append(mailIds, &id)
		}

		for idxRange := range gopart.Partition(len(mailIds), 1000) {
			ids := mailIds[idxRange.Low:idxRange.High]
			deleteMailsRequest := &s3.DeleteObjectsInput{
				Bucket: aws.String("mailingful-mime"),
				Delete: &s3.Delete{
					Objects: ids,
					Quiet:   aws.Bool(true),
				},
			}

			if len(ids) > 0 {
				_, err = s3.New(sess).DeleteObjects(deleteMailsRequest)

				if err != nil {
					return err
				}
			}
		}

	}

	return nil
}

func scheduleCleanUp() {
	ticker := time.NewTicker(time.Hour)
	quit := make(chan struct{})
	go func() {
		for {
			select {
			case <-ticker.C:
				err := cleanUpMails()
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
