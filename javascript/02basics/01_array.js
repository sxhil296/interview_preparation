// Array - collection of multiple items, mixed data types, zero indexed
// mutable
// non primitive
// []

const myArray = [0, 1, 2, 3, 4, 5];
const myArrayTwo = new Array("a", "b", "c");

// array methods
// push - add to end of array
myArray.push(6);
console.log(myArray);

// unshift - add to the beginning
myArray.unshift(7);
console.log(myArray);

// pop - removes the last value
myArray.pop();
console.log(myArray);

// shift - removes the first value
myArray.shift();
console.log(myArray);

// reverse - reverses the order of the array
myArray.reverse();
console.log(myArray);

// sort - sorts the array
myArray.sort();
console.log(myArray);

// check elements
console.log(myArray.includes(8));
console.log(myArray.indexOf(10));

const newArray = myArray.join(); //converts array into a string
console.log(newArray);

// slice - doesn't include last index, no change in original
console.log("A", myArray);
console.log(myArray.slice(1, 3));
console.log(myArray);

// splice - includes last index, changes the original
console.log("B", myArray);
console.log(myArray.splice(1, 3));
console.log(myArray);

const marvel_heroes = ["spiderman", "iron_man", "hulk"];
const dc_heroes = ["superman", "batman", "flash"];

// marvel_heroes.push(dc_heroes) //pushes the array
// console.log(marvel_heroes);

// marvel_heroes.push(...dc_heroes); //pushes the elements of the array
// console.log(marvel_heroes);

// const allHeroes = [...marvel_heroes, ...dc_heroes] //combines the elements of arrays
// console.log(allHeroes);

//concat - combines two arrays into a new array
// const combinedHeroes = marvel_heroes.concat(dc_heroes);
// console.log(combinedHeroes);

const nested_array = [1, 2, 3, [4, 5, 6], [7, [8, 9]]];
const flat_array = nested_array.flat(Infinity)
console.log(flat_array);


console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name : "hitesh"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));