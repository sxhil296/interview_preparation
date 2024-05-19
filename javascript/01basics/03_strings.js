// sequence of characters, primitive data type, immutable
let name = "Sahil";
let repoCount = 50;
// console.log(name + repoCount + " value");
// avoid using the above method, use string interpolation
console.log(`Hello, my name is ${name}. I have ${repoCount} on GitHub.`);

// declaring sting as new object
let myString = new String("Hello");

console.log(myString[0]);
console.log(myString.__proto__); //{}

console.log(myString.length);
console.log(myString.charAt(1)); //returns the character at a specified index
console.log(myString.charCodeAt(1)); // returns the unicode value of the character at a speicified index

console.log(myString.indexOf('e')); //returns the index of the first occurrence of the specified character


console.log(myString.toLowerCase());
console.log(myString.toUpperCase());


console.log(myString.substring(0, 4)); //4th index is not included, -ve values are not allowed


// slice
// -ve values are possible (starts from reverse)
// end index is not included
console.log(myString.slice(0,4));
console.log(myString.slice(-1));
console.log(myString.slice(-1, 4)); //empty because the start index is beyond the end index

// trim
//removes leading and trailing spaces
let newString = "            programming    "
console.log(newString);
console.log(newString.trim());
console.log(newString.trimStart());
console.log(newString.trimEnd());

// replace
//replaces a string with another string
let newStringOne = "Hello World";
console.log(newStringOne);
console.log(newStringOne.replace("World", "Universe"));


// convert a string into an array
let nameString = 'sahil-emir-malik'
let nameArray = nameString.split('-');
console.log(nameArray);
