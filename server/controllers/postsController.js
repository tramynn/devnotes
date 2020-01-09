async function allPosts(req, res) {
  const db = req.app.get("db");
  const posts = await db.posts.getAllPosts();

  res.status(200).json(posts)
}

async function addPost(req, res) {
  const { category_name, title, content } = req.body;
  const { user_id } = req.session.user.user_id;

  const db = req.app.get("db");

  const addedPost = await db.posts.addPost([category_name, title, content, user_id]);

  res.status(200).json(addedPost);
}

async function editPost(req, res) {

}

async function deletePost(req, res) {

}

async function allPostsByCategoryName(req, res) {

}

module.exports = {
  allPosts,
  addPost,
  editPost,
  deletePost,
  allPostsByCategoryName
}