const express = require("express");
const app = express();
// console.dir(app);

app.use((request, response) => {
  console.log("We got a new request!");
  // response.send("Hello, we got your request!");
  // response.send({ color: "red" });
  response.send("<h1>This is the webpage through js!</h1>");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
