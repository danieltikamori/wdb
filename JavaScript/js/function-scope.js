// Function Scope

// Variable "visibility"
// The location where a variable is defined dictates where we have access to that variable.

//Function Scope
//Variables DEFINED inside Function, exists ONLY INSIDE the function, can't access outside the function
function collectEggs() {
  let totalEggs = 6;
  console.log(totalEggs);
}
// Print 6

//If run out of function:
function collectEggs() {
  let totalEggs = 6;
}
console.log(totalEggs); // ERROR: totalEggs is not defined

// If initialize the function before:
function collectEggs() {
  let totalEggs = 6;
}
collectEggs();
console.log(totalEggs); // ERROR: totalEggs is not defined

// !! But if the variable is defined before/outside the function? (Not common)

let totalEggs = 0;
function collectEggs() {
  totalEggs = 6;
}
console.log(totalEggs); // Print 0
collectEggs(); // Run the function
console.log(totalEggs); // So the result changes accordingly to the function execution, 6

// If the variable isn't defined in the function, it will reference the first defined variable outside.
