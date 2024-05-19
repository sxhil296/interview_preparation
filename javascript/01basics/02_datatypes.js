"use strict"; //treat all JS code as newer version

// alert("Hello!") // for browser only
// JavaScript is dynamic typed language

// *************** DATATYPES ***************** //
// based on how datatypes are stored and accessed

// *** PRIMITIVE DATATYPES - most basic data types, immutable, stored directly in the variable, call by value *** //

// Number => 2, 2.3

// BigInt => 98765465678765n

// String => "sahil"

// Boolean => true/false

// Null => representation of empty value (it is standalone value, object)
let outsideTemp = null

// Undefined => when value is not defined but the variable is declared
let userEmail;
let userName = undefined;

// Symbol => it is used for uniqueness
let mySymbol = Symbol("123");
let anotherSymbol = Symbol("123")
console.log(mySymbol === anotherSymbol); //false



// **** NON PRIMITIVE DATATYPES - reference types, objects and mutable, can hold collection of values, stored as reference  ***** //

// Object - collection of properties in key:value pair
let myobject = {
    name: "sahil",
    age: 20,
}

// Array - special type of object used to store ordered collections of values
const myArray = ["batman", "spiderman"]

// Function - block of code designed to perform a particular task
function greet(name) {   //function definition
    return `Hello, ${name}!`;
  }
greet("Sahil")  //function call


// ***** SOME NEW DATATYPES INTRODUCED IN ES6 *****//  
// Map - collection of keyed data items, like an object but allows keys of any type
let map = new Map();
map.set('name', 'Eve');

// Set - collection of unique values
let set = new Set([1, 2, 3, 4, 4, 5]);




// ************ TYPE CONVERSION ************* //

let score = "33abc";
console.log(typeof "abc"); //string
console.log(typeof score); //string
console.log(typeof score); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //Nan

let names = "John Doe";
console.log(typeof names); //string

let emptyStr = "";
console.log(typeof emptyStr); //string

let namesInNumber = Number(names);
console.log(typeof namesInNumber); //number

// "33" => 33
// "33abc" => NaN
// "abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => 0
// "" => false
// "abc" => 1
// "0" => 0
// "-0" => -0

console.log(2 + 2); //4
console.log(2 + "2"); //22
console.log("2" + 2); //22
console.log("2+2"); //2+2

// ************* OPERATIONS ***************** //

let value = 3;
let negValue = -value;
console.log(negValue);

//arithmetic operations
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(3 / 2);
console.log(3 % 2);

// concatenation of strings
let str1 = "hello";
let str2 = "world";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
//avoid using the above practice, use more ()

console.log(true);
console.log(+true);

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let counter = 100;
counter++;
console.log(counter);
++counter;
console.log(counter);

// prefix and postfix operators
// If used postfix,(x++), the increment operator increments and returns the value before incrementing.
let x = 3;
const y = x++;
console.log(x, y);

//If used prefix, (++x), the increment operator increments and returns the value after incrementing.
let a = 3;
const b = ++a;
console.log(a, b);

// ****************Comparison of datatypes *************** //
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(1 == 1);
console.log(2 != 1);

// while comparing two values, make sure their datatypes are same

console.log("comp");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null != 0);
// == and >, <, >=, <= work differently
//comparison convert null to a number, treating it as 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined != 0);

// strict check ===
console.log("2" == 2); //true
console.log("2" === 2); //false
// === doesn't do auto type conversion