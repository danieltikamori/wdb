const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
uuidv4();

app.use(express.urlencoded({ express: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  { id: uuidv4(), username: "Todd", comment: "lol it is so funny!" },
  { id: uuidv4(), username: "Mike", comment: "I like tacos" },
  { id: uuidv4(), username: "Garbo", comment: "Hey you" },
  { id: uuidv4(), username: "Consuela", comment: "Interesting theme!" }
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  // res.send("It worked!");
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  // const foundComment = comments.find((c) => c.id === id);
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  // console.log(req.body);
  const { meat, qty } = req.body;
  res.send(`Ok, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));

// GET /comments - list all comments
// POST /comments - create a new comment
// GET /comments/:id - get a single comment (using ID)
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - delete one comment
