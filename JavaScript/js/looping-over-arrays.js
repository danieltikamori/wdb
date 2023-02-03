// LOOPING over ARRAYS

// Iterating over every index
const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

// 0 'lions'
// 1 'tigers'
// 2 'bears'

// Backwards - From the end of the array to the beginning
for (let i = animals.length - 1; i >= 0; i--) {
  console.log(animals[i]);
}

//Loop over the people array with a for loop, printing out each name in uppercase letters.  Your result should look something like:

// SCOOBY
// VELMA
// DAPHNE
// SHAGGY
// FRED

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
