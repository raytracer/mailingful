package queries

import (
	"time"

	jwt "github.com/dgrijalva/jwt-go"
)

type User struct {
	Account string `json:"account"`
	jwt.StandardClaims
}

type ExternalAccount struct {
	Id        string
	AccountId string
	Host      string
	Username  string
	Password  string
	Protocol  string
	Port      int
}

type Response struct {
	Error   interface{}
	Payload interface{}
	Meta    interface{}
}

type Envelope struct {
	Id        string
	MessageId string
	InReplyTo string
	Subject   string
	From      string
	Date      time.Time
	To        string
	CC        string
	BCC       string
	Seen      bool
	Size      int
	S3Key     string
}

type EnvelopeWithLabels struct {
	Envelope Envelope
	Labels   []string
}

type MailContent struct {
	HtmlBody    string
	TextBody    string
	Attachments []Attachment
}

type Attachment struct {
	Name     string
	MimeType string
	S3Key    string
	Size     int
}

type GetMails struct {
	Label      string `binding:"required"`
	SearchTerm string
	Offset     uint64 `binding: min=0`
}

type GetContent struct {
	MailId string `binding:"required"`
}

type MarkSeen struct {
	Seen   bool   `binding:"required"`
	MailId string `binding:"required"`
}

type CreateDraft struct {
	Envelope    Envelope    `binding:"required"`
	MailContent MailContent `binding:"required"`
}

type GetAccountId struct {
	Prefix string `binding:"required"`
}

type MoveToFolder struct {
	FolderName string   `binding:"required"`
	MailIds    []string `binding:"required"`
}

type GetFolderId struct {
	Name      string `binding:"required"`
	AccountId string `binding:"required"`
}

type InsertNewMail struct {
	Mail        Envelope
	Labels      []string
	Attachments []Attachment
	AccountId   string
	HTMLBody    string
	TextBody    string
}

type InsertNewAttachment struct {
	Attachment Attachment
	MailId     string
	Data       string
}

type DeleteAttachment struct {
	S3Key  string
	MailId string
}

type InsertDraft struct {
	Mail        Envelope
	Attachments []Attachment
	HTMLBody    string
	TextBody    string
}

type InsertPromotion struct {
	Email string
}

type Login struct {
	Username string
	Password string
}
