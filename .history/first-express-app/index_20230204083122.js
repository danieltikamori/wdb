const express = require("express");
const app = express();
// console.dir(app);

app.use(()=>{
  
    console.log(`We got a new request! ${data}`);
  }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
