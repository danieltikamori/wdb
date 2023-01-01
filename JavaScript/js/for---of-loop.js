// FOR... OF LOOP

// A nice and easy way of iterating over arrays (or other iterable objects)

for (variable of iterable) {
  statement;
}

const subreddits = [
  "cringe",
  "books",
  "chickens",
  "funny",
  "pics",
  "soccer",
  "gunners"
];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}
// With For... of Loop equivalent:
for (let subreddit of subreddits) {
  console.log(`Visit reddit.com/r/${subreddit}`);
}

// Another example:
const seatingChart = [
  [`Kristen`, `Erik`, "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"]
];

// for (let i = 0; I < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
// With For... of Loop equivalent:
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}

for (let char of "Hello World! Happy 2023!") {
  console.log(char);
}
