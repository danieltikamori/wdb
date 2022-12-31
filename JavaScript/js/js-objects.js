// OBJECTS
// Are collections of properties
// Properties are a key-value pair
// Rather than accessing data using an index, we use custom keys
// Collection of different pieces of information
// Curly braces {} and ,

const fitBitData = {
  totalSteps: 234534534,
  totalMiles: 334.3,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cherry"],
};

// Accessing Data out of objects
// Using []
product["price"]; //returns 1.99
//concatenating - not commonly used, but possible
product["in" + "Stock"]; // Returns the value "true" of the key inStock

//creating variable and using with objects

let priceProduct = "price";
product[priceProduct]; //May return 1.99 (?)

// Using dot .
product.price; //returns 1.99

// Valid keys
// All keys are converted to Strings  *except for Symbols

// MODIFYING OBJECTS

const midterms = { danielle: 96, thomas: 78 };

// Want to update the score
midterms.thomas = 79; // change 78 to 79

// Changing numbers to string

midterms.thomas = "C+";
midterms["danielle"] = "A";
// {danielle: "A", thomas: "C+"}

// ADDING properties

midterms.ezra; // undefined
midterms.ezra = "B+";
midterms["antonio"] = "A-";
// midterms {danielle: "A", thomas: "C+", ezra: "B+", antonio: "A-"}
