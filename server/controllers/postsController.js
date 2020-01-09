async function allPosts(req, res) {
  const db = req.app.get("db");
  const posts = await db.posts.getAllPosts();

  res.status(200).json(posts)
}

async function addPost(req, res) {

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