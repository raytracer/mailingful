CREATE TABLE IF NOT EXISTS accounts (
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
                AccountId UUID NOT NULL REFERENCES accounts (Id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS promotion (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                Email TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS mails (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                AccountId UUID NOT NULL REFERENCES accounts (Id) ON DELETE CASCADE,
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
                Size INT NOT NULL,
                S3Key TEXT NOT NULL,
                Seen BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS labels (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                Name TEXT NOT NULL,
                MailId UUID NOT NULL REFERENCES mails (Id) ON DELETE CASCADE,
                UNIQUE (MailId,
                        Name)
);

CREATE TABLE IF NOT EXISTS attachments (
                Id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
                MailId UUID NOT NULL REFERENCES mails (Id) ON DELETE CASCADE,
                Name Text NOT NULL,
                MimeType Text NOT NULL,
                S3Key Text NOT NULL,
                Size INT NOT NULL,
                INDEX (MailId)
);

