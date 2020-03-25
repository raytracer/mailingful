INSERT INTO promotion (Email)
    VALUES ($1) ON CONFLICT (Email) DO NOTHING