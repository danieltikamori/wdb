// Function Expressions
// Store a function in a variable. Functions are objects behind the scenes, a value.
// Declare a function name is actually OPTIONAL.
// Doesn't need to declare a name for the function.
const square = function (num) {
  return num * num;
};
square(7); // 49

// E.g.:
function add(x, y) {
  return x + y;
}
//  Storing in a variable:
const add = function (x, y) {
  //There's no need for function name, just variable name.
  return x + y;
};
