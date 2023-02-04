const { response } = require("express");
const express = require("express");
const app = express();
// console.dir(app);

// Commonly uses (req, res)
// app.use((request, response) => {
//   console.log("We got a new request!");
//   // response.send("Hello, we got your request!");
//   // response.send({ color: "red" });
//   response.send("<h1>This is the webpage through js!</h1>");
// });
app.get("/", (request, response) => {
  response.send("<h1>This is the webpage through js!</h1>");
});

app.get("/r/:subreddit", (request, response) => {
  const { subreddit } = request.params;
  response.send(`<h1>Browsing ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (request, response) => {
  const { subreddit, postId } = request.params;
  response.send(
    `<h1>Viewing post ID ${postId} on the ${subreddit} subreddit</h1>`
  );
});

app.post("/cats", (request, response) => {
  response.send("POST request to /cats! This is different than a GET request!");
});

app.get("/cats", (request, response) => {
  response.send("Meow!");
});

app.get("/dogs", (request, response) => {
  response.send("Woof!");
});
//* means everything. Commonly used for generic response on unknown/inexistent path. Put in the end or otherwise may run when it is not supposed to run(will ignore valid paths).
app.get("*", (request, response) => {
  response.send("I don't know that path / or inexistent");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
