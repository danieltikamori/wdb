// Can mix arrays and objects
// Arrays in Objects
// Objects in arrays

const comments = [
  { username: "Tammy", text: "loolollool", votes: 9 },
  { username: "FishBoi", text: "glub glub", votes: 5165431 },
];

comments[1]; // returns the second object, index 1 from 0
comments[1].text; // returns "glub glub"
