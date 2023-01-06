// Math object
// Contains properties and methods for mathematical constants and functions

Math.PI // 3.14.159.....

// Rounding a number
Math.round(4.9) // 5

// Absolute Value
Math.abs(-456) // 456

// Raises 2 to the 5th power
Math.pow(2,5) // 32

// Removes decimal - chop off the decimal
Math.floor(3.9999) // 3

// Round up or ceiling up
Math.ceil(34.1) //35
Math.ceil(34.999) //35
Math.ceil(34.01) //35

// Random Numbers
Math.random() // gives us a random decimal between 0 and 1 (non-inclusive)

// Random INTEGERS - replace the multiplier to the desired limit 
// Random integers between 1 and 10
const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Mat.floor(step2);
const step4 = step3 + 1;

Math.floor(Math.random() * 10) + 1;

// Random integers between 1 and 5
const step1 = Math.random();
const step2 = step1 * 5;
const step3 = Mat.floor(step2);
const step4 = step3 + 1;

Math.floor(Math.random() * 5) + 1;

// Random integers between 20 and 22
// First figure out how many options, how many numbers can be generated
// In this case 3 possibilities, so shift the multiplier to 3
// then add the first possible number (change the + 1 to + 20 in this case)

const step1 = Math.random();
const step2 = step1 * 3;
const step3 = Mat.floor(step2);
const step4 = step3 + 20;

Math.floor(Math.random() * 3) + 20;