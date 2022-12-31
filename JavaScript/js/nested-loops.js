// Nesting LOOPS

let str = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log("Outer: ", i);
  for (let j = 0; j < str.length; j++) {
    console.log(" Inner:", str[j]);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`   j is: ${j}`);
  }
}

const seatingChart = [
  [`Kristen`, `Erik`, "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"]
];

for (let i = 0; I < seatingChart.length; i++) {
  console.log(seatingChart[1]);
}

for (let i = 0; I < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
