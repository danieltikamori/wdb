// default parameters ( = )
// New syntax improvement where we add an equal and a default value  directly if not passed(undefined, NaN)
// Pay attention to the order. Avoid creating default value to the first parameter,
// have come second or third or whatever it is(must come after a parameter that isn't default)

function multiply(a, b = 1) {
  // "a" have no default value, but "b" have. Equal and the default value directly in the parameter list
  return a * b;
}

function rollDie(numSides = 6) {
  // default value is 6
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there") {
  console.log(`${msg}, ${person}!`);
}
greet("Joaquin"); // returns "Hey there, Joaquin!"

function greet(person, msg = "Hey there", punc = "!") {
  console.log(`${msg}, ${person}${punc}`);
}
greet("Rosa"); // returns "Hey there, Rosa!"

// spread syntax (...)
// Spread syntax allows an iterable such as an array to be EXPANDED in places where zero or more arguments
// (for function calls) or elements (for array literals) are expected, or an object expression to be expanded
//  in places where zero or more key-value pairs (for object literals) are expected.
// ... before the parameter

// Expands an iterable(array, string, objects, etc.) into a list of arguments
const nums = [9, 3, 2, 8];
Math.max(nums); //NaN
// Using spread:
Math.max(...nums); //67(?)
// Same as calling:
Math.max(9, 3, 2, 8);

// In arrays, is like removing the [].
// console.log(...nums); // prints 9 3 2 8 instead of [9, 3, 2, 8]

// With strings:
console.log(..."Hello!!!"); // H e l l o ! ! !

// spread with array literals
// Don't change the original array
// Order matters
// Can copy into another array or combine arrays into another one
const cats = ["Blue", "Scout", "Rocket"];
const copyCats = [...cats]; // copy cats array into copyCats array
const dogs = ["Rusty", "Wyatt"];

//const allPets = [...cats, ...dogs]; // make a COPY of both arrays and combine them into one
//['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt'];
// Can add other things in the beginning and/or end
// [...dogs, ...cats, "Speedy"]; // adds 'Speedy to the end ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt', 'Speedy]
// Even numbers mixed to strings
// [1, 2, 3...dogs, ...cats, 'Speedy']; // adds 1 , 2, 3 to the beginning and 'Speedy at the end [1, 2, 3, 'Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt', 'Speedy]

// Transforming a string into a array:
//["hello"] // ["hello"]
//[..."Hello"] // ["h", "e", "l", "l", "o"]

// spread in Object literals
// Copies properties from one object into another object literal
// Used to copy objects into another, specially if working with libraries and tools like React
// Make a copy of an object into another object and add more information

const feline = { legs: 4, family: "Felidae" };
const canine = { family: "Caninae", furry: true };

const dog = { ...canine, isPet: true };
// {family: "Caninae", furry: true, isPet: true}

const lion = { ...feline, genus: "Panthera" };
// {legs: 4, family: "Felidae", genus: "Panthera"}

const catDog = { ...feline, ...canine }; // both have family property, so the last overwrite all
// {legs: 4, family: "Caninae", furry: true}

// {...[2,4,6,8]} // {0: 2, 1: 4, 2: 6, 3: 8}
// {..."Hiii"} //{0: "H", 1: "i", 2: "i", 3: "i"}

// Copying a object and adding more information into the new object
// Suppose we have a data from a form anda want add more information(ID and isAdmin)
const dataFromForm = {
  email: "blueman@ggmail.com",
  password: "tobias123!",
  username: "tfunke"
};
const newUser = { ...dataFromForm, id: 12345, isAdmin: false };
//{
//   email: 'blueman@ggmail.com',
//   id: 12345,
//   isAdmin: false,
//   password: 'tobias123!',
//   username: 'tfunke'
// }

// rest parameters
// It looks like spread(because use ...), but it's not. It is the opposite, instead of spreading,
// it is collecting into a single parameter
// Collects all remaining(the rest) arguments into an actual array
// ... goes in our parameter list and is going to collect all remaining arguments

// Arguments object
// Available inside every function
// It's an array-like object:
//  - Has a length property
//  - Does not have array methods like push/pop
// Contains all the arguments passed to the function
// Not available inside of arrow functions

// Using rest parameters
function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

sumAll(1, 2); //3
sumAll(1, 2, 3, 4, 5); //15

function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold medal goes to: ${gold}`);
  console.log(`Silver medal goes to: ${silver}`);
  console.log(`And thanks to everyone else: ${everyoneElse}`);
}

raceResults("Tammy", "Todd", "Tina", "Trevor", "Travis");
// Gold medal goes to: Tammy
// Silver medal goes to: Todd
// And thanks to everyone else: Tina, Trevor, Travis

// Destructuring
// A short, clean syntax to 'unpack:
// - Values from arrays
// - Properties from objects
// - Parameters
// Into distinct variables

// Destructuring ARRAYS
// Order matters
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// Using destructuring:
const [gold, silver, bronze, ...everyoneElse] = scores;
// gold = 929321; silver = 899341, so on...

const raceResults = ["Eliud Kipchoge", "Feyisa Lelisa", "Galen Rupp"];

const [gold, silver, bronze] = raceResults;
gold; // "Eliud Kipchoge"
silver; // "Feyisa Lelisa"
bronze; // "GAlen Rupp"

const [fastest, ...everyoneElse] = raceResults;
fastest; // "Eliud Kipchoge"
everyoneElse; // ["Feyisa Lelisa", "Galen Rupp"]

// Destructuring OBJECTS
// More commonly used
// Not about order, but properties
// Can assign a new variable name using "property: newVariable"
// Also can assign a default(fallback) value using "property: newVariable = 'N/A'(for example)"
// Syntax:
const {
  property: newVariable = "fallbackValue",
  property: newVariable = "fallbackValue",
  etc
} = objectName;

const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
  city: "San Francisco",
  state: "California"
};

const user2 = {
  email: "Stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma"
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user; // Reassigning new variable name and setting a default value

// const { city, state, died = 'N/A' } = user2;

// Destruturing PARAMETERS
// More frequently used with objects
// Use {} in parameters

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}` // don't need to refer the object/parameter user
// }

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

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

// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`; // don't need to refer the object movies
});
