package main

import (
	"context"
	"database/sql"
	"errors"
	"log"
	"reflect"

	"github.com/gin-gonic/gin"
	"github.com/microcosm-cc/bluemonday"
	"github.com/olivere/elastic"
	q "mailingful.com/mailingful-server/queries"
)

func getMails(client *elastic.Client, accountId string, query q.GetMails) ([]q.EnvelopeWithLabels, error) {
	envelopes := make([]q.EnvelopeWithLabels, 0)

	var err error

	ctx := context.Background()

	boolQuery := elastic.NewBoolQuery()
	boolQuery.Must(elastic.NewTermQuery("AccountId", accountId))
	boolQuery.Must(elastic.NewTermQuery("Labels", query.Label))

	if query.SearchTerm != "" {
		matchQuery := elastic.NewMatchQuery("HTMLBody", query.SearchTerm)
		matchQuery.Fuzziness("AUTO")
		boolQuery.Must(matchQuery)
	}

	searchResult, err := client.Search().
		Index("mails").
		Query(boolQuery).
		Sort("Mail.Date", false).
		From(int(query.Offset)).Size(11).
		Do(ctx)

	if err != nil {
		return nil, err
	}
	log.Println(searchResult.Hits.TotalHits)

	var row q.InsertNewMail
	for _, item := range searchResult.Each(reflect.TypeOf(row)) {
		if insertedMail, ok := item.(q.InsertNewMail); ok {
			envelope := insertedMail.Mail
			labels := insertedMail.Labels
			envelopes = append(envelopes, q.EnvelopeWithLabels{Envelope: envelope, Labels: labels})
		}
	}

	return envelopes, nil
}

func getMailContent(db *sql.DB, accountId string, query q.GetContent) (*q.MailContent, error) {
	var content q.MailContent
	row := db.QueryRow("SELECT HtmlBody, TextBody FROM mails WHERE AccountId = $1 AND Id = $2", accountId, query.MailId)

	err := row.Scan(&content.HtmlBody, &content.TextBody)

	if isSpam(db, query.MailId) {
		content.HtmlBody = getSpamPolicy().Sanitize(content.HtmlBody)
	} else {
		content.HtmlBody = getNormalPolicy().Sanitize(content.HtmlBody)
	}

	if err != nil {
		return nil, err
	}

	attachments := make([]q.Attachment, 0)
	rows, err := db.Query("SELECT Name, MimeType, S3Key, Size FROM attachments WHERE MailId = $1", query.MailId)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var attachment q.Attachment
		if err := rows.Scan(&attachment.Name, &attachment.MimeType, &attachment.S3Key, &attachment.Size); err != nil {
			return nil, err
		}

		attachments = append(attachments, attachment)
	}

	content.Attachments = attachments

	return &content, nil
}

func getNormalPolicy() *bluemonday.Policy {
	p := bluemonday.UGCPolicy()
	p.AllowElements("html", "head", "body", "style", "svg")
	//stange email requirements
	p.AllowAttrs("style", "bgcolor", "align").Globally()
	p.AllowAttrs("border", "cellpadding", "cellspacing").OnElements("table")
	p.AllowDataURIImages()
	p.AddTargetBlankToFullyQualifiedLinks(true)
	p.AllowStyling()
	return p
}

func getSpamPolicy() *bluemonday.Policy {
	p := bluemonday.StrictPolicy()
	p.AllowElements("html", "head", "body")
	p.AllowElements("section", "summary", "article", "aside")
	p.AllowElements("h1", "h2", "h3", "h4", "h5", "h6")
	p.AllowElements("hgroup")
	p.AllowAttrs("cite").OnElements("blockquote")
	p.AllowElements("br", "div", "hr", "p", "span", "wbr", "a")
	p.AllowLists()
	p.AllowTables()
	p.AllowStandardAttributes()
	return p
}

func getEnvelopeHandler(c *gin.Context) {
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
	if err := c.ShouldBindJSON(&query); err == nil {
		if !isMyMail(db, query.MailId, account) {
			c.JSON(403, q.Response{Error: errors.New("Not your Mail")})
			return
		}
		envelope, err := getEnvelope(db, account, query)
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: envelope})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}

}

func getEnvelope(db *sql.DB, accountId string, query q.GetContent) (*q.Envelope, error) {
	var envelope q.Envelope
	row := db.QueryRow("SELECT Id, Date, FromAddress, CCAddress, BCCAddress, ToAddress, MessageId, InReplyTo, Subject, Seen, Size, S3Key FROM mails WHERE AccountId = $1 AND Id = $2", accountId, query.MailId)

	err := row.Scan(
		&envelope.Id,
		&envelope.Date,
		&envelope.From,
		&envelope.CC,
		&envelope.BCC,
		&envelope.To,
		&envelope.MessageId,
		&envelope.InReplyTo,
		&envelope.Subject,
		&envelope.Seen,
		&envelope.Size,
		&envelope.S3Key,
	)

	if err != nil {
		return nil, err
	}

	return &envelope, nil
}

func getMailsHandler(c *gin.Context) {
	claims, _ := getClaims(c)

	var query q.GetMails

	if err := c.ShouldBindJSON(&query); err == nil {
		es, err := newESClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		envelopes, err := getMails(es, claims.Account, query)

		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			stop := len(envelopes)
			if stop > 10 {
				stop = 10
			}
			c.JSON(200, q.Response{Payload: envelopes[0:stop], Meta: gin.H{"more": len(envelopes) > 10}})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func getMailContentHandler(c *gin.Context) {
	claims, _ := getClaims(c)

	var query q.GetContent

	if err := c.ShouldBindJSON(&query); err == nil {
		db, err := newClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		content, err := getMailContent(db, claims.Account, query)

		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: content})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func setMailSeen(db *sql.DB, seen bool, accountId string, mailId string) error {
	_, err := db.Query("UPDATE mails SET Seen = $1 WHERE Id = $2 AND AccountId = $3", seen, mailId, accountId)
	return err
}

func setMailSeenHandler(c *gin.Context) {
	claims, _ := getClaims(c)

	var seen q.MarkSeen

	if err := c.ShouldBindJSON(&seen); err == nil {
		db, err := newClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		err = setMailSeen(db, seen.Seen, claims.Account, seen.MailId)
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}

		ctx := context.Background()
		es, err := newESClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		_, err = es.Update().Index("mails").Type("_doc").Id(seen.MailId).
			Script(elastic.NewScriptInline("ctx._source.Mail.Seen = params.seen").Lang("painless").Param("seen", seen.Seen)).
			Do(ctx)

		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: nil})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func moveToFolder(db *sql.DB, es *elastic.Client, folderLabel string, mailId string) error {
	_, err := db.Query(updatefolder, mailId, folderLabel)

	if err != nil {
		return err
	}

	ctx := context.Background()
	script := "ctx._source.Labels.removeIf(item -> item.startsWith(params.old)); ctx._source.Labels.add(params.folder);"
	_, err = es.Update().Refresh("true").Index("mails").Type("_doc").Id(mailId).
		Script(elastic.NewScriptInline(script).Lang("painless").Param("folder", folderLabel).Param("old", "folder:")).
		Do(ctx)

	return err
}

func moveToFolderHandler(c *gin.Context) {
	var moveTo q.MoveToFolder

	if err := c.ShouldBindJSON(&moveTo); err == nil {
		es, err := newESClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		db, err := newClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		folderLabel := "folder:" + moveTo.FolderName
		for _, mailId := range moveTo.MailIds {
			err := moveToFolder(db, es, folderLabel, mailId)

			if err != nil {
				c.JSON(500, q.Response{Error: err.Error()})
				return
			}

			if err != nil {
				c.JSON(500, q.Response{Error: err.Error()})
				return
			}
		}

		c.JSON(200, q.Response{Payload: nil})
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func insertMail(db *sql.DB, mail q.InsertNewMail) (*string, error) {
	rows, err := db.Query(
		insertmail,
		mail.AccountId,
		mail.Mail.Date,
		mail.Mail.From,
		mail.Mail.BCC,
		mail.Mail.CC,
		mail.Mail.To,
		mail.Mail.MessageId,
		mail.Mail.InReplyTo,
		mail.Mail.Subject,
		mail.HTMLBody,
		mail.TextBody,
		mail.Mail.Seen,
		mail.Mail.Id,
		mail.Mail.Size,
		mail.Mail.S3Key,
	)

	if err != nil {
		return nil, err
	}

	defer rows.Close()
	var id string
	for rows.Next() {
		if err := rows.Scan(&id); err != nil {
			return nil, err
		}

		return &id, nil
	}

	return nil, errors.New("No id returned when inserting mail")
}

func insertNewMailHandler(c *gin.Context) {
	var query q.InsertNewMail

	if err := c.ShouldBindJSON(&query); err == nil {
		insertNewMailCommons(query, c)
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}
