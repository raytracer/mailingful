INSERT INTO accounts (Email, Prefix, PasswordHash, FullName)
    VALUES ('christoph@raytracer.me', 'test', 'TODO', 'Christoph Müller')
    ON CONFLICT (Prefix)
    DO NOTHING;

