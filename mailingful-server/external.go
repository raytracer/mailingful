package main

import (
	"database/sql"

	"github.com/gin-gonic/gin"
	q "mailingful.com/mailingful-server/queries"
)

func getExternalAccountsHandler(c *gin.Context) {
	claims, err := getClaims(c)

	if err == nil {
		db, err := newClient()
		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
			return
		}
		accounts, err := getExternalAccounts(db, claims.Account)

		if err != nil {
			c.JSON(500, q.Response{Error: err.Error()})
		} else {
			c.JSON(200, q.Response{Payload: accounts})
		}
	} else {
		c.JSON(400, q.Response{Error: err.Error()})
	}
}

func getExternalAccounts(db *sql.DB, accountId string) ([]q.ExternalAccount, error) {
	accounts := make([]q.ExternalAccount, 0)
	rows, err := db.Query("SELECT Id, Username, Protocol FROM external_accounts WHERE AccountId = $1", accountId)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var account q.ExternalAccount
		if err := rows.Scan(&account.Id, &account.Username, &account.Protocol); err != nil {
			return nil, err
		}

		accounts = append(accounts, account)
	}

	return accounts, nil
}

func getExternalAccountsAllData(db *sql.DB, accountId string) ([]q.ExternalAccount, error) {
	accounts := make([]q.ExternalAccount, 0)
	rows, err := db.Query("SELECT Id, Username, Protocol, Password, Host, Port FROM external_accounts WHERE AccountId = $1", accountId)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var account q.ExternalAccount
		if err := rows.Scan(&account.Id, &account.Username, &account.Protocol, &account.Password, &account.Host, &account.Port); err != nil {
			return nil, err
		}

		accounts = append(accounts, account)
	}

	return accounts, nil
}
