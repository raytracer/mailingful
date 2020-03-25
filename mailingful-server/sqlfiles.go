package main 

const (
basicaccount = `INSERT INTO accounts (Email, Prefix, PasswordHash, FullName)
    VALUES ('christoph@raytracer.me', 'test', 'TODO', 'Christoph Müller')
    ON CONFLICT (Prefix)
    DO NOTHING;

`
deleteattachment = `DELETE FROM attachments WHERE MailId = $1 AND S3Key = $2;`
getmails = `SELECT mails.Id, Subject, FromAddress, ToAddress, CCAddress, BCCAddress, InReplyTo, Seen, Date 
FROM mails, labels WHERE mails.AccountID = $1 AND mails.Id = labels.MailId AND lower(labels.Name) = lower($2) 
ORDER BY date DESC 
LIMIT 101 
OFFSET $3`
getmailssearch = `SELECT mails.Id, Subject, FromAddress, ToAddress, CCAddress, BCCAddress, InReplyTo, Seen, Date 
FROM mails, labels WHERE 
    mails.AccountID = $1
     AND mails.Id = labels.MailId
     AND lower(labels.Name) = lower($2)
     AND (
         Subject ILIKE '%' || $3 || '%'
         OR FromAddress ILIKE '%' || $3 || '%'
         OR HTMLBody ILIKE '%' || $3 || '%'
         OR TextBody ILIKE '%' || $3 || '%'
     )
ORDER BY date DESC 
LIMIT 101 
OFFSET $4`
insertattachment = `INSERT INTO attachments (MailId, Name, MimeType, S3Key)
    VALUES ($1, $2, $3, $4);

`
insertlabel = `INSERT INTO labels (MailId, Name)
    VALUES ($1, $2)
    ON CONFLICT (MailId, Name)
    DO NOTHING;

`
insertmail = `UPSERT INTO mails (AccountId, Date, FromAddress, CCAddress, BCCAddress, ToAddress, MessageId, InReplyTo, Subject, HTMLBody, TextBody, Seen, Id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING
    Id;

`
insertpromotion = `INSERT INTO promotion (Email)
    VALUES ($1) ON CONFLICT (Email) DO NOTHING`
schema = `CREATE TABLE IF NOT EXISTS accounts (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                Prefix Text NOT NULL UNIQUE,
                Email TEXT NOT NULL UNIQUE,
                PasswordHash TEXT NOT NULL,
                FullName TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS external_accounts (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                Host TEXT NOT NULL,
                Username TEXT NOT NULL,
                Password TEXT NOT NULL,
                Protocol TEXT NOT NULL,
                Port INT NOT NULL,
                AccountId UUID NOT NULL REFERENCES accounts (Id)
);

CREATE TABLE IF NOT EXISTS promotion (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                Email TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS mails (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                AccountId UUID NOT NULL REFERENCES accounts (Id),
                Date TIMESTAMP NOT NULL,
                FromAddress TEXT NOT NULL,
                CCAddress TEXT,
                BCCAddress TEXT,
                ToAddress TEXT,
                MessageId TEXT,
                InReplyTo TEXT,
                Subject TEXT,
                HTMLBody TEXT,
                TextBody TEXT,
                Seen BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS labels (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                Name TEXT NOT NULL,
                MailId UUID NOT NULL REFERENCES mails (Id),
                UNIQUE (MailId,
                        Name)
);

CREATE TABLE IF NOT EXISTS attachments (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                MailId UUID NOT NULL REFERENCES mails (Id),
                Name Text NOT NULL,
                MimeType Text NOT NULL,
                S3Key Text NOT NULL,
                INDEX (MailId)
);

`
updatefolder = `UPDATE labels
SET Name = $2
WHERE MailId = $1 and Name ILIKE 'folder:%';`
)
