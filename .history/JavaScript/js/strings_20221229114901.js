// Strings stores text
// Use 'text', "text" or `text`

// Can use "text" inside '' and vice-versa

let salute = 'I said "Hello!" and you replied me "Hi!"';

// Strings are INDEXED starting from 0
// Each character has a corresponding index(positional number)
//e.g.:
let animal = 'Dumbo Octopus';
animal[0] //returns "D"
animal[1] // returns "u"
animal[99] //returns undefined as it is not defined or existent

// Can be used to check the existence of a character
let phoneNumber = "(231)345-1344";
// Is the first character a parentheses at an opening parenthesis?
phoneNumber[0] //returns "("

// length property

animal.length // returns 13, the number of characters, not index(count - 1)
animal[12] // returns the last character

// concatenation - adding strings together
// string + string
let firstName = "River";
let lastName = "Phoenix";
firstName + lastName // returns "RiverPhoenix"
//Creates a new string, not destructive to the previous variables(doesn't change the variables value)
firstName // returns "River"
lastName // returns "Phoenix"

// Can't overwrite 1 character manually, can just overwrite that ENTIRE string, giving it a new value

let fullName = firstName + " " + lastName; // "River Phoenix"

1 + "h1" // returns a string "1hi" typeof string

// String Methods

thing.method()

"hello".length; // returns 5

toUpperCase() method
let msg = "test with strings";
msg.toUpperCase(); // uppercase the whole text, NOT DESTRUCTIVE == the original text msg unchanged
let testString = msg.toUpperCase(); // capture the value

toLowerCase() method // lowercase th text

trim() method // will trim off any whitespace at the beginning and at the end
let greeting = '    Hello there   '
greeting.trim() // 'Hello there'
// Doesn't remove non space characters like ___

// Combining string methods

greeting.trim().toUpperCase().toLowerCase();

// Methods with arguments

indexOf() method // returns the FIRST matching index. Test if there's a character in the string
let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found) Negative number means no occurrence/nonexistence

slice(beginIndex[, endIndex(optional)]) method // Extract or slice a portion of a string and it returns it as a new string. NOT DESTRUCTIVE
let hahaha = 'haha that is so funny!';
hahaha.slice(5) // 'that is so funny'
hahaha.slice(5, 9); // 'that'
hahaha.slice(5,10); // 'that '
hahaha.slice(10, 12) // 'is'
// Negative number - it is treated as str.length + beginIndex. e.g. beginIndex is -3, treated a str.length -3 (backwards)
// If beginIndex is greater than or equal to str.length, slice() returns an empty string
hahaha.slice(-1) // '!' the last single character
hahaha.slice(-5) // 'unny!

replace() method // the first argument is what we are trying to replace and the second is what we want to replace it with
replace('toBeReplaced', 'theSubstitute'); // NOT Destructive
hahaha.replace('haha', 'lolol'); // replaces haha to lolol
hahaha.replace('h', 'H'); // replace the first h occurrence: Haha

repeat() method // Repeats
repeat(count)
lol.repeat(10); // 'lollolollolollolollolol...' lol 10x

//Template Literals

//Use ` between the string to "activate" this feature.
//Use ${} in variables or numbers to insert in the string.

//E.g.

let product = 'Artichoke';
let price = 2.25;
let qty = 5;

console.log(`You bought ${qty} of ${product}(s). Total price is $${price * qty}`);