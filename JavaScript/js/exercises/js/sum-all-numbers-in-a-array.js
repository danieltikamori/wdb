// Sum Array Exercise
// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101

function sumArray(numArray) {
  let total = 0;
  for (let i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }
  return total;
}
