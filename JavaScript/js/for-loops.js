// For loop

// Used when we KNOW the number of iterations, when don't, use while loop

// For loop syntax
for ([initialExpression]; [condition]; [incrementExpression]) {
  //method, function, etc
}

//    start at 1  stop at 10  add 1 each time
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// start at 1, while the condition is true (i <= 10), increment 1 to i

// Printing EVEN numbers
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//Printing ODD numbers
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// Counting down
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

// Can use += -= *= /= int the expression
