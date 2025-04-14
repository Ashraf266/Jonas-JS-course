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

// -------------------------------

//type conversion

const inputYear = "1991";

console.log(inputYear + 18); // '199118'
console.log(Number(inputYear) + 18); //2009
// or
console.log(+inputYear + 18); //2009

console.log(Number("Ashraf")); //NaN
console.log(typeof NaN); //number (invalid number but type is number)

console.log(String(32)); //"32"

const num32 = 32;
console.log(num32.toString()); //"32"

//we can convert only to Numbers Strings Booleans

//type coercion

console.log("I am " + 32 + "years old"); //concatination triggers string conversion
console.log("I am " + String(32) + "years old");
console.log("I am " + "32" + "years old");

console.log("23" - "10" - 3); //subtraction triggers numbers conversion
console.log("23" + "10" - 3);
console.log("23" + 10 - 3);

console.log("23" * "2"); //multiplication (NOT LIKE PYTHON) and division triggers numbers conversion
console.log("23" * 2);
console.log("22" / "2");
console.log("22" / 2);

console.log(2 + 3 + 4 + "5"); //'95'

// 5 falsy values: 0, '', undefined, null, NaN
// anything else is a truthy value even [] & {}

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean({})); //true !!
console.log(Boolean([])); //true !!

const money = 0;

if (money) {
  console.log("you got money");
} else {
  console.log("you are broke");
}

// strict equality === vs (loose) equality ==
// strict doesn't do type coercion

console.log(18 === "18"); //false
console.log(18 == "18"); //true

// Number: return true only if both operands have the same value. +0 and -0 are treated as the same value.
// If either operand is NaN, return false; so, NaN is never equal to NaN.

console.log(NaN === NaN); //false
console.log(NaN == NaN); //false

// const favouriteValue = prompt("What's your fav number?"); // to get user input returns a string
// console.log(favouriteValue);

// logical operators && || !

let testDay = "mon";

switch (testDay) {
  case 1: // strict equality
  case 2:
    //code;
    break;

  case "mon":
    //code
    break;

  default:
  //code
}

// statements vs expressions

3 + 4; // is an expressions it produces a value
1991; // is an expression
true && false && !true; // is an expression

// if else && switch are a statements we can say statements are like actions

// in template literals JS excpect expressions not statements

`${221 - 332}`; // `${if(true) 1 }` error
`${true ? 4 : 3}`; // ternary operator considered an expression and not a statement

// to resolve forward compatibility we use "Babel" to transpile or polyfill code
// (converting it back to ES5 to ensure browser compatibility for all users)
