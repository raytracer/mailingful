UPDATE labels
SET Name = $2
WHERE MailId = $1 and Name ILIKE 'folder:%';