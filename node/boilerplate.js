const fs = require("fs");
const folderName = process.argv[2] || "Project";

// fs.mkdir(folderName, {recursive: true}, (err)=>{
//   console.log("In the callback!")
//   if (err) throw err;
// });

//Using synchronous creation to avoid problems
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/app.js`);
  fs.writeFileSync(`${folderName}/styles.css`);
} catch (err) {
  console.log(`We have a situation: ${err}`);
}
