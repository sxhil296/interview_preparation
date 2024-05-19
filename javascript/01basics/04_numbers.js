let score = 400
console.log(score);
console.log(typeof(score));  //number

const bal = new Number(100.0076)
console.log(typeof(bal)); //object

console.log(bal.toString().length);

console.log(bal.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// **** MATHS **** //
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,6,8))
console.log(Math.max(4,5,6,8))

console.log(Math.random()); // from 0 to 1
console.log(Math.floor(Math.random() * 10) + 1); // from 1 to 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


console.log(Math.floor(Math.random() * (6-1+1)) + 1);