UPSERT INTO mails (AccountId, Date, FromAddress, CCAddress, BCCAddress, ToAddress, MessageId, InReplyTo, Subject, HTMLBody, TextBody, Seen, Id, Size, S3Key)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
RETURNING
    Id;

