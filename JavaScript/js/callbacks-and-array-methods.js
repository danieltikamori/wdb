// Callbacks and array methods

// NOTE: The IDEs extensions may change the code automatically, so sometimes it won't be in the intended format

// forEach Method
// Accepts a callback function
// Calls the function once per element in the array
// Nowadays not much used as for...of do a better job

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
  console.log(n * n);
  // prints 81, 64, 49, 36, 25, 16, 9, 4, 1
});

// even numbers
nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
    // prints 8, 6, 4, 2
  }
});

// forEach vs for...of comparison:
//forEach
nums.forEach(function (el) {
  console.log(el);
});

//for...of
for (let el of nums) {
  console.log(el);
}

// map Method
// Creates a new array with the results of calling a callback on every element in the array
// Like run the function on every element and create a new array with these elements

const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});

texts; // ["rofl", "lol", "omg", "ttyl"]
caps; // ["ROFL", "LOL", "OMG", "TTYL"]

const movies = [
  {
    title: "Amadeus",
    score: 99
  },
  {
    title: "Stand by me",
    score: 85
  },
  {
    title: "Parasite",
    score: 95
  },
  {
    title: "Alien",
    score: 90
  }
];

const titles = movies.map(function (movie) {
  return movie.title;
  // return movie.title.toUpperCase();
});
// return titles of the movies

// map practice:
// Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

// e.g.,

// console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" }
];

// Solution:
const firstNames = fullNames.map(function (first) {
  //instead of first, may use another identifiable name, e.g. firstName
  return first.first;
});

// Arrow functions
// "Syntactically compact alternative" to a regular function expression
// It allows to write functions without actually having to write the keyword function
// Create function expressions

const square = (x) => {
  return x * x;
};

// Common function
const add = function (x, y) {
  return x + y;
};
// Using arrow function
const sum = (x, y) => {
  return x + y;
};

// If don't have a argument or MORE than one, must have at least parenthesis
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

// If have ONE argument, parenthesis aren't necessary
const square = (x) => {
  return x * x;
};

//Arrow function practice
// Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

// greet("Hagrid") //"Hey Hagrid!"
// greet("Luna") //"Hey Luna!"
// Be sure to use arrow function syntax!
//Solution:
const greet = (name) => {
  return `Hey ${name}!`;
};

// Arrow function implicit returns
// Even more compact code
// replace curly braces{} with parenthesis() and "return" keyword
// Only work if there is ONE only statement
// From:
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

// To:
const rollDie = () => Math.floor(Math.random() * 6) + 1;

// To oneliner(can eliminate the parenthesis and put all in one line, take care of the length):
const rollDie = () => Math.floor(Math.random() * 6) + 1; // evaluate if worth the length
const add = (a, b) => a + b; // ok length

// Function setTimeout - delay the execution
// Pass 2 things in: A callback and  a number of milliseconds to delay the execution of the function
setTimeout(() => {
  console.log("Hello!!!");
}, 3000);

console.log("Hello!!!"); // run immediately
setTimeout(() => {
  console.log("...are you still there?");
}, 3000); // Will run after the timeout(after 3sec)
console.log("Goodbye!!!"); //run immediately after print "Hello!!!"

// Function setInterval - repeat execution at set interval
// One important thing to know is HOW TO STOP IT

setInterval(() => {
  console.log(Math.random());
}, 2000);

// Stopping the execution
// Execution creates a id and to stop it, it must be passed in clearInterval()
const id = setInterval(() => {
  console.log(Math.random());
}, 2000);
clearInterval(id); // it stops the execution

// filter Method
// Creates a new array with all elements that pass the TEST implemented by the provided function

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter((n) => {
  return n % 2 === 1; // our callback returns true or false
  // if it returns true, n is added to the filtered array
});
// [9, 7, 5, 3, 1]

const smallNums = nums.filter((n) => n < 5);
// [4, 3, 2, 1]

//
const movies = [
  {
    title: "Amadeus",
    score: 99
  },
  {
    title: "Stand by me",
    score: 85
  },
  {
    title: "Parasite",
    score: 95
  },
  {
    title: "Alien",
    score: 90
  }
];

const goodMovies = movies.filter((movie) => {
  return movie.score > 90;
});
//or
const goodMovies = movies.filter((m) => m.score > 90);

const goodTitles = goodMovies.map((m) => m.title); // shows the movies titles at goodMovies
//or
movies.filter((m) => m.score > 90).map((m) => m.title); // the same result of above code

// Filter Practice:
// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// // => ["mark", "carrie98", "MoanaFan"]

// Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

// function validUserNames(usernames) {
//   // your code here
// }
// or if you want to get fancy with an arrow function:

// const validUserNames = usernames => // your code here;

// There is no need to define an actual array of usernames, that part is done for you behind the scenes.
// If you get stuck on this exercise, please see here for a quick video walkthrough.

//Solution:
function validUserNames(usernames) {
  // your code here
  return usernames.filter((usernames) => usernames.length < 10);
}

// every Method
//Tests whether all elements in the array pass the provided function. Returns a boolean value

const words = ["dog", "dig", "log", "bag", "wag"];
words.every((word) => {
  return word.length === 3;
}); //true
words.every((word) => word[0] === "d"); // false

words.every((w) => {
  let last_letter = w[w.length - 1];
  return last_letter === "g";
}); // true

// some Method
// Similar to every, but returns true if ANY of the array elements pass the test function

const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];
// Are there any words longer than 4 characters?
words.some((word) => {
  return word.length > 4;
}); // true

// Do any words start with 'Z'?
words.some((word) => word[0] === "z"); // false
// Do any words contain 'cake'?
words.some((w) => w.includes("cake")); // true

// Some/Every practice
// Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)

// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false

// Solution:
function allEvens(num) {
  return num.every((num) => num % 2 === 0);
}

// reduce Method
// Executes a reducer function on each element of the array or object, resulting in A SINGLE VALUE
// Use if want to reduce an array into a SINGLE value // Like sum the arrays values

// Syntax: variable.reduce((accumulator, currentValue) => function(what to execute), initialValue);

// Summing an array
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// Callback   accumulator currentValue return value
// first call 3           5            8
// 2nd call   8           7            15
// so on...

// In practice:
const prices = [3.34, 2.25, 6.47, 8.89, 3.11, 9.88];
const total = prices.reduce((total, price) => {
  return total + price;
});
// In single line:
const total = prices.reduce((total, price) => total + price);

// Finding the minimal value in the array
prices.reduce((min, currentPrice) => {
  if (currentPrice < min) {
    return currentPrice;
  }
  return min;
});

// Finding the maximal value in the array
prices.reduce((max, currentPrice) => {
  if (currentPrice > max) {
    return currentPrice;
  }
  return max;
});

// Using in an object
const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999
  },
  {
    title: "Alien",
    score: 90,
    year: 1979
  }
];

const highestRated = movies.reduce((bestMovie, currentMovie) => {
  if (currentMovie.score > bestMovie.score) {
    return currentMovie;
  }
  bestMovie;
});

// Specifying the initial starting point of the accumulator parameter

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100); // the second argument(after ,) is the initial value(100)
// returns 100 + 20(the sum)

// Arrow functions and keyword "this"
// Usually this refers to whatever comes to the left, in the example 'person'
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};
// But if use arrow function (=>), it doesn't work as expected. Refers to the scope that it was created in
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  }
};
// Run: person.fullName() // returns "undefined undefined"
// In this case, referes to the Window object

// Using the arrow function to our advantage:
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this); // refers to the person object
      console.log(this.fullName()); // undefined undefined
    }, 3000);
  }
};
