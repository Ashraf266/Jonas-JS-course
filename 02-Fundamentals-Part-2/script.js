"use strict"; // must be the first line of the script
// we can activate strict mode for specific scope

let hasDriverLicense = false;
const passTest = true;

if (passTest) {
  // hasdriverlicense = true; //error in strict mode
}

// without strict mode we can define variables without let or var
// it also reserve certain words that might be used in the future like interface and private

function logger() {
  console.log("test");
}

logger();
logger();
logger();

function funcWithParameters(parameter1, parameter2) {
  console.log(parameter1);
  console.log(parameter2);
}

// anynomous function is a function without a name used in function expression

const funcExp = function (par1) {
  console.log(par1);
};

funcExp(1);

const arrowFunc1 = (year) => 2025 - year;

const arrowFunc2 = () => {
  console.log("arrow function");
  return null;
};

// arrow functions do not have this keyword

//arrays intro
//arrays is mutable only primitive values are immutable that's why we can change array values even if we are using const

const arr = [1, 2, 3, 4]; //litral syntax
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length - 1]);

const arr1 = new Array(1, 2, 3, 4);
console.log(arr1);

const arr2 = new Array(3);
console.log(arr2);

arr[0] = 5;
console.log(arr.at(-1));

// arr = ["string1", "string2"]; //error

// arr + number => string
console.log(arr + 10); // '5,2,3,410'

const array = [];

array.push(1); //reutrns the length of the array after adding the element
array.unshift(0); //add element to the begining of an array

array.push(2);
array.push(3);
array.push(4);
array.push(5);

const lastElmentOfTheArray = array.pop();
const firstElementOfTheArray = array.shift();

console.log(array);
console.log(array.indexOf(4));
console.log(array.indexOf(56)); //return -1

console.log(array.includes(2)); // uses strict equality
console.log(array.includes(5));
console.log(array.includes(1, 2)); //search from index 2

//objects intro
const ashraf = {
  firstName: "Ashraf",
  lastName: "Abdelfattah",
  age: 24,
  job: "FE Dev",
};

// dot notation vs bracket notation

console.log(ashraf.firstName);
console.log(ashraf["firstName"]); // in bracket we can put any expression

const nameKey = "Name";

console.log(ashraf["first" + nameKey]);
console.log(ashraf["last" + nameKey]);

//if we need to calc the property name we use bracket notation

//adding new properties

ashraf.location = "Egypt";
ashraf["realName"] = "Mohamed";

console.log(ashraf);

const myObject = {
  id: 20,
  getId: function () {
    return this.id;
  },

  setProduct: function (product) {
    this.product = product;
  },
};

console.log(myObject.getId());
console.log(myObject["getId"]());

console.log(myObject.product);
myObject.setProduct("caps");
console.log(myObject.product);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const newArray = new Array(1, 2, 3, 4, 5);
console.log(newArray);

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

let dice = Math.trunc(Math.random() * 6) + 1;

console.log("Rolled " + dice);

while (dice != 6) {
  console.log("Rolled " + dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}
