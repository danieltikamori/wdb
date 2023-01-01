// As For... of isn't iterable(by the time it is written) with objects with {}, we may have to use For... in
// It is uncommon to use For... in loop, mostly For... of is used
// With some tweaks(Object methods), we can use the lovely For... of

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60
};

// for (let person of testScores) {
//   console.log(person);
// }
// ERROR - NOT ITERABLE

// Gives the KEYS in the object
for (let person in testScores) {
  console.log(person);
}

// Gives the VALUES in the keys in the object
for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`); // person scored value
}

// Another way to have values using For... of:
for (let score of Object.values(testScores)) {
  console.log(score);
}

// Summing the values
let total = 0;
for (let score of Object.values(testScores)) {
  total += score;
}

// MEAN of the values
// As objects don't have "length" i.e. object.length cannot be used,
// it is necessary create an array to use length to count the number of values
total = 0;
let scores = Object.values(testScores); // create an array of values
for (let score of scores) {
  total += score; // sums the values
}
console.log(total / scores.length); // divide the sum with the total number(length) of values

// Some object methods. =>Capitalized Object

// Object method Object.keys(object)
// Gives the keys in the object
Object.keys(testScores);

// Object method Object.values(object)
// Gives the values in the keys
Object.values(testScores);

// Object method Object.entries(object)
// Gives the nested array of key-value pairs
Object.entries(testScores);
