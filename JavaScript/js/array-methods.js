// JavaScript Array methods
//We cover some arrays, there's many almost useless in the documentation

// Push - ADD value to end
// Pop - REMOVE value from end - no arguments
// Shift - REMOVE from start - no arguments
// Unshift - ADD to start

//Comes from CS data structures - stacks and queues

let movieLine = [ 'tom', 'nancy', 'pablo', 'oliver'];
movieLine.shift() // Arguments between parenthesis are unnecessary, as it is a remove method.
movieLine.push('john'); // Necessary to insert a argument, as it is the value to be inserted/added.
movieLine.push('david', 'kevin', 'carly');
movieLine.unshift('VIP');
movieLine.pop();

// concat - merge two or more arrays, don't change the existing arrays, just returns a new array
let cats = ['kitty', 'doraemon', 'lilly'];
let dogs = ['meri', 'rusty', 'rufus'];
cats.concat(dogs);
let pets = cats.concat(dogs);

// includes - determines whether an array includes a certain value, returning true or false.
let array1 = [1, 2, 3];
console.log(array1.includes(2));

// indexOf - returns the FIRST index at which a given element can be found or -1 if its not present. Good to check if a element exists or not in an array.
let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('giraffe')); // -1

// reverse - reverses an array in place. The first array element becomes the last, the last becomes the first and so on. No arguments needed.
// It is destructive to original - changes the original array.

const reversedArray = array1.reverse();
console.log('Reversed: ', reversedArray);
console.log('array1: ', array1); //you can see the original array changed. Be careful.

// slice - returns a shallow copy of a portion of an array into a new array object selected form start to end (end not included). The original array won't be modified.
console.log(beasts.slice(2));
console.log(beasts.slice(2, 4));
//negative index can be used
console.log(beasts.slice(-3, 4));

// splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// array.splice(start[, deleteCount[, item1[. item2[, ...]]]])
// Destructive to the original array
// As possible use to update the end of the array, not efficient to insert things in the middle of an array
let months = ['Jan','March', 'April', 'June'];
//Just inserting
months.splice(1, 0, 'Feb'); //inserts at index 1, deletes 0(just insert, don't replace)
console.log(months);
//Replacing
months.splice(4, 1, 'May'); //replaces 1 element at index 4
console.log(months);
//Can also just delete elements
months.splice(2, 3); //works?
console.log(months);

// sort - sorts the elements of an array in place and returns the sorted array. 
//Default order is ascending, upon converting elements into strings, then comparing their sequences of UTF-16 code units values
//Not much useful because of sorting method, not reliable numerical sorting method
//Can be customized with FUNCTIONS
months.sort();
console.log(months);

let array2 = [1, 70, 1100, 2500, 100, 9, -12, -26, 0, 34]
array2.sort();
console.log(array2);

// Not commonly used methods:
//toString
//reduce
//filter