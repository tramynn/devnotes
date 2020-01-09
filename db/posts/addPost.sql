INSERT INTO posts (category_name, title, content, date_published, user_id)
VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4)