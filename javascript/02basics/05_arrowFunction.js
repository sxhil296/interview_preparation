const user = {
  username: "Sahil",
  price: 999,
  welcomeMsg: function () {
    console.log(`${this.username}, welcome to the wesbite.`);
    console.log(this);
  },
};

user.welcomeMsg();
// this keyword in JavaScript refers to the object that is executing the current function.

user.username = "Emir";
user.welcomeMsg();

console.log(this); //empty in node, window in browser (window is global object in browser)

// arrow function
const chai = () => {
  console.log("Arrow function!");
  //   let fruit = "apple"
  console.log(this);
};
chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(4, 5));

// const addTwo = (num1, num2) => (num1 + num2)

// IIFE - immediately invoked function execution
// function coffee(){
//   console.log("DB connected!");
// }
// coffee()

//global scope k pollution se bachne k liye - By using an IIFE, you can create a new scope for variables and functions, which prevents them from being accessible globally. This helps to avoid naming collisions and keeps the global scope clean.
//Avoiding Conflicts in Asynchronous Code

// named iife
(function coffee() {
  console.log("DB connected!");
})();

// unamed iife
((name)=>{
  console.log(`${name} connected!`);
})("mongodb")