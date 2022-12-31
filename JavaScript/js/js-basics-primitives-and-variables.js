//Primitive types

// Number
// String
// Boolean
// Null
// Undefined

// Symbol
// BigInt

// Number - beyond 15 decimals, js may round the number
// 1.999999999999999 = 1.999999999999999
// 1.9999999999999999 = 2

//Math operations

Addition
50 + 5 // 55

Subtraction
90 - 1 // 89

Multiplication
11111 * 7 // 77777

Division
400/25 //16

Modulo !!
27 % 2 // 1=========> remainder operator. 1 is the remainder of the division.
19 % 4 //3
//Commonly used to define if the number is whole number(?), even or odd.

Exponential
2 ** 4 //`6

// Operation order: PEMDAS
Parenthesis
Exponents
Multiplication
Division
Addition
Subtraction

// NaN - Not a Number
0/0 //NaN
1 + NaN //NaN
// Can't do math with NaN
typeof NaN = "number" //Belongs to the number family whilst the name

// += , -= , *= , /=
let score = 5;
score = score + 5; // = score += 5;
score = score - 5; // = score -= 5;
score = score / 2; // = score /= 2;

// Increment and decrement
++i // increments 1 before return value (prefix incrementer)
i++ // increments 1 after return value (postfix incrementer)
variable++ // increments 1 after return value e.g. score++

--i // decrements1 before return value
i-- // decrements 1 after return value
variable-- // decrements 1 after return value

// Boolean - true or false
//Used to evaluate if something is true or false.

// A variable can have the type changed, from boolean to number, so to a string.

// let - creating a reference to a variable that can be reassigned (reference in memory can be changed)
let number1 = 1;
let number2 = number1; //to the same reference.

// const - creating a reference to a variable that CAN'T be reassigned (reference in memory can't be changed)
const PI = 3.14;
const feetInMile = 5280;

// var - avoid using this - old way to assign variables, deprecated now.

// Naming Variables
// camelCase
// begins with lowercase, so the second word(so on) begins with uppercase character