require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
// Controllers
const ac = require("./controllers/authController")
const pc = require("./controllers/postsController")
// Dotenv
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
// Middleware
app.use(express.json());

// Session
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

// Database Connection
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected!")
})

// Auth Endpoints
app.get("/auth/user");
app.post("/auth/register");
app.post("/auth/login");
app.get("/auth/logout");

// Posts Endpoints
app.get("/api/posts");
app.post("/api/posts");
app.put("/api/posts/:post_id");
app.delete("/api/posts/:post_id");
app.get("/api/posts/:category_name")

app.listen(SERVER_PORT, () => {
  console.log(`SERVER PORT LISTENING ON: ${SERVER_PORT}`)
})
