// alert("Start");
console.log(40 * 32 - 238);

let variable = "Testing";
let firstName = "Ashraf";
let PI = 3.14;

let country = "Portugal";
let continent = "Europe";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

// In JS the value has a certain type not the variable

// console.log(testVar); Error
let testVar = 123;
console.log(testVar);
console.log(typeof testVar);

testVar = 123n;
console.log(testVar);
console.log(typeof testVar);

// typeof null is an object it's a bug not corrected for legacy reasons
console.log(typeof null);

// const YEAR; => Error

let age = 30;
age = 31;

const birthYear = 1999;

// var declared variables are hoisted
// let block scope var function scope
console.log(test);
var test = 32;

//declare variable without let or var or const
//but it doesn't create a variable in the current scope it will create a property in the global object
newVariable = "value";

const customString = "I'm" + firstName + " " + (24 - 3) + "years old";
const customString2 = `I'm ${firstName} ${24 - 3} years old`;

const multiLineString = `line1
line2
line3`;

const multiLineString2 =
  "line1 \n\
line2 \n\
line3";

console.log(multiLineString);
console.log(multiLineString2);

//if else control structure
if (true) {
    console.log(true);
} else {
    console.log(false);
}
