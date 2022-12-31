// && AND Operator
//Both sides must be true ALSO have precedence over OR ||

true && true

true && false //false
false && false // false

const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log("Valid password!");
} else {
  console.log("Incorrect format for password!")
}

// || OR Operator
//Only one side needs to be true!
1 !== 1 || 10 === 10 // true
10/2 === 5 || null //true
0 || undefined // false
true || false // true

const age = 10;
if (age >= 0 && age < 5 || age >= 65) {
  console.log("Free");
 } else if (age >= 5 && age < 10) {
    console.log("$10");
 } else if ( age >= 10 && age < 65){
    console.log("$20");
 } else {
    console.log("Invalid age!")
 }

// ! NOT operator
// ! expression returns true if expression is false
// Negate the value - operates upon an expression, doesn't combine to expressions

!false //true
!null //true
!!null //false - flips the boolean according to the number of !
! (0 === 0) //false
! (3 <= 4) // false

const ageNOT = 8;
//evaluates what is in parenthesis then flip because of ! outside the parenthesis
if (!(ageNOT >=0 && ageNOT < 5 || age >= 65)) {
  console.log("You are not a baby or a senior!")
}
