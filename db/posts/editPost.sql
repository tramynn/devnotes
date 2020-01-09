UPDATE posts
SET
  title = $1,
  content = $2,
  date_published = CURRENT_TIMESTAMP
WHERE user_id = $3 AND post_id = $4;