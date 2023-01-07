// Higher Order Functions

// Functions that operate on/with other functions.
// They can:
// Accept other functions as arguments
// Return a function

// Accepting other function as argument
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHAHAH");
}
callTwice(laugh); //pass a function as an argument

// "HAHAHAH"
// "HAHAHAH"

//
function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);

// Returning a function as a returning value

//Example of Function Factory:
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
// const testRange = function (num) {
//   return num >= 100 && num <= 200;
// };

const isChild = makeBetweenFunc(0, 17); // the range is inclusive
isChild(40); // returns false
isChild(7); // returns true

const isAdult = makeBetweenFunc(18, 64); // range is inclusive
const isSenior = makeBetweenFunc(65, 150);
isSenior(); // returns false

// Defining Methods

// We can add functions as properties on Objects, a.k.a Methods
// Method is a function that has been placed as a property on an object
// If we access a function by using a dot(.) in front of its name, it's a method, but is also a function
// Every method is a function, but not every function is a method

const myMath = {
  //object myMath
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  }
};

myMath.PI; // returns 3.14159
myMath.square(2); // returns 4
myMath.cube(2); // returns 8
// or myMath["cube"](2); // returns 8 (unusual syntax)

// SHORTHAND
// No need for the function keyword and :(colon)
const math = {
  say: "Hi!",
  add(x, y) {
    // no colon neither function keyword
    return x + y;
  },
  multiply(x, y) {
    // no colon neither function keyword
    return x * y;
  }
};
math.add(50, 60); // 110

// Keyword "this"
// Use the keyword "this" to access other properties on the same object
// Typically use inside of an object in a method
// The value of "this" depends on the invocation context of the function it is used in. (Depends on how we call the function)
// window object is the default object for the "this" keyword if no object is explicitly declared

const person = {
  first: "Robert",
  last: "Herjavec",
  fullName() {
    return `${this.first} ${this.last}`; // "this" refers to person object
  }
};
person.fullName(); // "Robert Herjavec"
person.last = "Plant";
person.fullName(); // "Robert Plant"

const cat = {
  name: "Blue Steele",
  color: "gray",
  breed: "Scottish fold",
  meow() {
    console.log(this.color);
  }
};

const cat = {
  name: "Blue Steele",
  color: "gray",
  breed: "Scottish fold",
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says Meowwww`);
  }
};
const meow2 = cat.meow;

// Running
meow2(); // says Meowwww - the keyword this is not going to refer to the cat object
cat.meow(); // Blue Steele says Meowwww - it is a method on cats, refers to the object cats
// What's the difference? Invocation context

// Discovering where does refer
// console.log("THIS IS:", this);
cat.meow();
// THIS IS: {
// name: 'Blue Steele',
// color: 'gray',
// breed: 'Scottish fold',
// meow: function }
meow2();
// THIS IS:
// Window {parent: Window, opener: null.......} // Window object

//Window is the top level object, the default object for the keyword "this"
window.alert("window object");
// If a function is evoked without explicit object, the window object is referred by "this" keyword

// Egg Laying Exercise
// Define an object called hen.  It should have three properties:

// name should be set to 'Helen'

// eggCount should be set to 0

// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount = this.eggCount + 1; // += or ++ don't worked at the time of doing the exercise
    return "EGG";
  }
};
