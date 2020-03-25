package main

import (
	"context"

	uuid "github.com/satori/go.uuid"
	q "mailingful.com/mailingful-server/queries"

	"github.com/gin-gonic/gin"
)

func insertDraftHandler(c *gin.Context) {
	claims, err := getClaims(c)
	if err != nil {
		c.JSON(401, q.Response{Error: err.Error()})
		return
	}
	var query q.InsertNewMail
	query.AccountId = claims.Account
	query.Labels = []string{"folder:draft"}
	if err = c.ShouldBindJSON(&query); err == nil {
		insertNewMailCommons(query, c)
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func insertNewMailCommons(query q.InsertNewMail, c *gin.Context) {
	db, err := newClient()
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}

	if query.Mail.Id == "" {
		query.Mail.Id = uuid.NewV4().String()
	}

	id, err := insertMail(db, query)
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}

	query.Mail.Id = *id
	ctx := context.Background()
	es, err := newESClient()
	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
		return
	}
	_, err = es.Update().
		Index("mails").
		Type("_doc").
		Id(*id).
		Doc(query).
		Upsert(query).
		ScriptedUpsert(false).
		Do(ctx)

	if err != nil {
		c.JSON(500, q.Response{Error: err.Error()})
	} else {
		for _, label := range query.Labels {
			err := insertLabel(db, *id, label)
			if err != nil {
				c.JSON(500, q.Response{Error: err.Error()})
				return
			}
		}

		for _, attachment := range query.Attachments {
			err = insertAttachmentSQL(db, *id, &attachment)
			if err != nil {
				c.JSON(500, q.Response{Error: err.Error()})
				return
			}
		}
		c.JSON(200, q.Response{Payload: id})
	}
}
