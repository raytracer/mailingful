package main

import (
	"bytes"
	"encoding/base64"
	"errors"

	"github.com/gin-gonic/gin"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/s3"
	uuid "github.com/satori/go.uuid"
	q "mailingful.com/mailingful-server/queries"
)

func createNewAttachmentHandler(c *gin.Context) {
	claims, err := getClaims(c)
	if err != nil {
		c.JSON(401, q.Response{Error: err.Error()})
		return
	}
	var query q.InsertNewAttachment
	account := claims.Account
	db, err := newClient()
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}
	if err := c.ShouldBindJSON(&query); err == nil {
		if !isMyMail(db, query.MailId, account) {
			c.JSON(403, q.Response{Error: errors.New("Not your Mail")})
			return
		}
		data, err := base64.StdEncoding.DecodeString(query.Data)
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		}
		id, err := createNewAttachment(&query.Attachment, data, query.MailId)
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: id})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func createNewAttachment(attachment *q.Attachment, data []byte, mailId string) (*string, error) {
	attachment.S3Key = uuid.NewV4().String()
	params := &s3.PutObjectInput{
		Bucket:        aws.String("mailingful-attachment"),
		Key:           aws.String(attachment.S3Key),
		Body:          bytes.NewReader(data),
		ContentLength: aws.Int64(int64(len(data))),
		ContentType:   aws.String(attachment.MimeType),
	}
	sess, err := newAWSSession()
	if err != nil {
		return nil, err
	}

	_, err = s3.New(sess).PutObject(params)

	if err != nil {
		return nil, err
	}

	db, err := newClient()
	if err != nil {
		return nil, err
	}
	insertAttachmentSQL(db, mailId, attachment)

	return &attachment.S3Key, nil
}

func deleteExistingAttachmentHandler(c *gin.Context) {
	claims, err := getClaims(c)
	if err != nil {
		c.JSON(401, q.Response{Error: err.Error()})
		return
	}
	var query q.DeleteAttachment
	account := claims.Account
	db, err := newClient()
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}
	if err := c.ShouldBindJSON(&query); err == nil {
		if !isMyMail(db, query.MailId, account) {
			c.JSON(403, q.Response{Error: errors.New("Not your Mail")})
			return
		}
		err = deleteExistingAttachment(query.MailId, query.S3Key)
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: true})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func deleteExistingAttachment(mailId string, s3Key string) error {
	params := &s3.DeleteObjectInput{
		Bucket: aws.String("mailingful-attachment"),
		Key:    aws.String(s3Key),
	}
	sess, err := newAWSSession()
	if err != nil {
		return err
	}

	_, err = s3.New(sess).DeleteObject(params)
	if err != nil {
		return err
	}

	db, err := newClient()
	if err != nil {
		return err
	}

	err = deleteAttachmentSQL(db, mailId, s3Key)
	if err != nil {
		return err
	}

	return nil
}
