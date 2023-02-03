// Functions, a big topic

// Reusable procedures:
// Allow us to write reusable, modular code
// We define a "chunk" of code that we can then execute at a later point
// Used ALL THE TIME

// Make code easier to understand
// Methods are technically functions, that are objects or simply put, values.
// There's no need to name the function, but with name is easier to identify and understand the function
// Functions can call other functions which call other functions...

let die1 = Math.floor(Math.random() * 6) + 1; // Like rolling a dice
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
let die5 = Math.floor(Math.random() * 6) + 1;
let die6 = Math.floor(Math.random() * 6) + 1;

// Can be this way with Functions:
let die1 = rolldie();
let die2 = rolldie();
let die3 = rolldie();
let die4 = rolldie();
let die5 = rolldie();
let die6 = rolldie();

// Also can change the number of sides of the dice:
let die1 = rolldie(6);
let die2 = rolldie(12);
let die3 = rolldie(20);
let die4 = rolldie(20);
let die5 = rolldie(6);
let die6 = rolldie(18);

// Using Functions

// 2 step process:
// 1 - Define the function
// 2 - Run the function
// Best practice is to define first, then run afterwards. It is possible to code the inverse, not recommended

// 1 Define - start with "function"
function funcName() {
  do something
}

// e.g:
function mottoPhrase() {
  console.log('Just do it!')
}

// 2 Run - always use () in the end. May use arguments inside () if convenient, also can run many times the same function
mottoPhrase(); // run once
mottoPhrase(); // run again

// ARGUMENTS in Functions

function greet(person) { // Add a meaningful "variable" name, actually called PARAMETER
  console.log(`Hi, ${person}!`);
}
// Running a function inputting a argument:
greet('Elvis');
// Output = "Hi, Elvis!"

// FUNCTIONS with multiple arguments
// The input order matters

function greetPerson(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`); // returns first name accompanied with last name initial
}

function repeat(message, numTimes) {
  let result = '';
  for (let i = 0; i < numTimes; i++) {
    result += message;
  }
  console.log(result);
}

repeat("I love engineering! ", 3); // returns I love engineering! I love engineering! I love engineering! 

// RETURN keyword
// Store and retrieve/reutilize value
// Only one value can be returned, one number or one array for example
// Ends the function execution AND specifies the value to be returned by the function
// Anything after RETURN EXECUTION won't run

function add(num1, num2) {
  let sum = num1 + num2; // or just return num1 + num2;
  return sum;
}

// Run example:
// add(9,4) // typed
// 13 //output
// const sum = add(9,4) // typed
// sum = 13 // sum holds the function output value

// Stops the function
function adding(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
     return false;
  } // else isn't necessary
  let sum = num1 + num2; // or just return num1 + num2;
  return sum;
}
