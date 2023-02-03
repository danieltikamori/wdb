// Block Scope
// Block refers to basically any time you see those curly braces {}, except for a function.
// Conditionals, Loop blocks

// Conditional block
let radius = 8;
if (radius > 0) {
  const PI = 3.14159;
  let msg = "Hiii!";
}

console.log(radius); // Print 8
console.log(PI); // PI is not defined, i.e. PI exists only in the if {} block

// Loop block

for (let i = 0; i < 5; i++) {
  let msg = "I'm in a block!";
  console.log(msg); // It prints the variable content
}
console.log(msg); // Error: msg is not defined(exists only inside the block{})

// Avoid using var keyword to define a variable, use only let or const
// Scoping rules won't work, so may cause trouble
