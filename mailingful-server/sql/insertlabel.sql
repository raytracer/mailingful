INSERT INTO labels (MailId, Name)
    VALUES ($1, $2)
    ON CONFLICT (MailId, Name)
    DO NOTHING;

