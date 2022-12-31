// While loops

// Continue running as long as the test condition is true
// Most used when we may NOT KNOW how many times it iterates and tha could involve user inputs
// For loops are mostly used when we KNOW how many times it iterates

// Increments after the first iteration return
let num = 0;
while (num < 10) {
  console.log(num);
  num++; // after
}

// Increments before the first iteration return
let num = 0;
while (num < 10) {
  num++; // before
  console.log(num);
}

// Equivalent to:

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//

let input = prompt("Hey, say something!");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "Stop copying me") break;
}
console.log("OK YOU WIN!");

for (let i = 0; i <= 1000; i++) {
  console.log(i);
  if (i === 100) break;
}
