// objects
// a collection of key-value pairs, where keys are strings (or symbols),and values can be any data type, including other objects, arrays, functions, and primitive values (like strings, numbers, booleans, etc.).

// object literal
const mySym = Symbol("keyOne");

const user = {
  name: "emir",
  "full name": "emir khan",
  [mySym]: "keyOne",
  age: 23,
  location: "sre",
  isLoggedin: false,
  lastLoginDays: ["Mon", "Sat"],
};

console.log(user);
console.log(user.age);
console.log(user["age"]);
console.log(user["full name"]);
console.log(user[mySym]);

// change values
user.age = 29;

// disallow value changing
// Object.freeze(user)
// user.age = 89
console.log(user.age);

// in js, functions are treated as variables
user.greeting = function () {
  console.log("hello user");
};

user.greeting2 = function () {
  console.log(`Hello, ${this.name}`);
};
console.log(user.greeting); //returns the reference
console.log(user.greeting());
console.log(user.greeting2());

// singleton declaration
// const tinderUser = new Object()
console.log("***************");

const tinderUser = {};
tinderUser.name = "emir";
tinderUser.id = "123abc";

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    firstName: "sahil",
    lastName: "malik",
  },
};

console.log(regularUser.fullname.firstName);

// combining objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

const users = [
  { id: "a", age: 23 },
  { id: "b", age: 25 },
];

console.log(users[0].id);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));