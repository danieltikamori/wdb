// Truthy and Falsy values
// All JS values have an inherent truthiness or falseness about them

//FALSY values:
false
0
""  //(empty string)
null
undefined
NaN

//Everything else is TRUTHY.

//Example
const userInput = prompt("Enter something");

//No need to input another thing together userInput
if (userInput) {
  console.log("Truthy")
} else {
  console.log("Falsy");
}