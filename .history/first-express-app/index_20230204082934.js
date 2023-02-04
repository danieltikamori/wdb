const express = require("express");
const app = express();
// console.dir(app);

app.use(()={
  type: "text/plain",
  send: (data) => {
    console.log(`data);
  }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
