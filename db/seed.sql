-- create users table
CREATE table users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  username VARCHAR(40) NOT NULL,
  hash TEXT
)
-- create posts table
CREATE table posts (
  post_id SERIAL PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(500) NOT NULL,
  date_published TIMESTAMP,
  user_id INT REFERENCES users(user_id)
)
-- checkForUsername
SELECT * FROM users
WHERE username = $1;
-- registerUser
INSERT INTO users (first_name, last_name, username, hash)
VALUES ($1, $2, $3, $4);
-- addPost
INSERT INTO posts (category_name, title, content, date_published, user_id)
VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4)
-- getAllPosts | inner join
SELECT * FROM posts;
-- editPost
UPDATE posts
SET
  title = $1,
  content = $2,
  date_published = CURRENT_TIMESTAMP,
  user_id = $3
WHERE post_id = $4;
-- deletePost
DELETE FROM posts
WHERE post_id = $1;
-- getAllPostsByCategoryName | inner join
SELECT * FROM posts
WHERE category_name = $1;
-- Dummy Data
INSERT INTO posts (category_name, title, content, date_published, user_id)
VALUES ('Frontend', 'My First DevNote', 'CSS is so cool', CURRENT_TIMESTAMP, 1);