// functions - block of code to perform specific task

// function definition
function sayMyName() {
  console.log("Heisenberg");
}

//function call or execution
sayMyName();

//parameters are simple variables to, placeholders for the values that will be passed to the function when it is called
function addTwoNumbers(number1, number2) {
  // console.log(number1+number2);
  return number1 + number2;
}

// arguments are the values of the parameters
const result = addTwoNumbers(2, 6);
console.log("Result : ", result);

function loginUserInfo(username = "Sam") {
  if (!username) {
    console.log("Please enter a username!");
    return;
  }
  return `${username} just logged in!`;
}

console.log(loginUserInfo("Sahil"));



// when no of arg is unkown - rest operator
function calculateCartPrice(val1, val2, ...num){
    return num
}

console.log(calculateCartPrice(100, 200, 300, 500));


const user = {
    username : "sahil",
    age: 23
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.age}.`);
}

console.log(handleObject(user));

myArray = [344,444,555,666]

function handleArray(anyArray){
    console.log(anyArray[2]);
}
handleArray(myArray)

