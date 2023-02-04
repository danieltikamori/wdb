const express = require("express");
const app = express();
// console.dir(app);

app.use((request, response) => {
  console.log("We got a new request!");
  <response className="send"></response>
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
