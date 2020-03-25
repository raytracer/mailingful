package main

import (
	"database/sql"
	"log"

	"github.com/gin-gonic/gin"
	q "mailingful.com/mailingful-server/queries"
)

func initialAccount(db *sql.DB) {
	if _, err := db.Exec(
		basicaccount); err != nil {
		log.Fatal(err)
	}
}

func getAccountIDForPrefix(db *sql.DB, prefix string) (string, error) {
	var id string
	if err := db.QueryRow(
		"SELECT Id FROM accounts WHERE prefix = $1", prefix).Scan(&id); err != nil || &id == nil {
		return id, err
	}

	return id, nil
}

func getPasswordHashForAccount(db *sql.DB, accountId string) (string, error) {
	var hash string
	if err := db.QueryRow(
		"SELECT PasswordHash FROM accounts WHERE Id = $1", accountId).Scan(&hash); err != nil || &hash == nil {
		return hash, err
	}

	return hash, nil
}

func getAccountIDForPrefixHandler(c *gin.Context) {
	var query q.GetAccountId

	if err := c.ShouldBindJSON(&query); err == nil {
		db, err := newClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		id, err := getAccountIDForPrefix(db, query.Prefix)

		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: id})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}
