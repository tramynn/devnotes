UPDATE posts
SET
  title = $1,
  content = $2,
  date_published = CURRENT_TIMESTAMP
WHERE post_id = $3;