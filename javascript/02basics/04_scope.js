//scope - the context in which variables and functions are accessible
// scope determines the visibility and lifespan of variables and functions in your code


//global scope - Variables and functions declared outside of any function or block. They can be accessed from anywhere in the code.


//local scope - Local scope refers to variables and functions that are accessible only within a specific part of your code. There are two main types of local scope: Function Scope and Block Scope.


//function scope - Variables declared inside a function. They can only be accessed within that function.


//block scoped - Variables declared inside a block (e.g., inside {} braces, such as within an if statement or a loop). Variables declared with let or const are block-scoped.


// var c = 300

let a = 100
if (true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "chaicode"
        console.log(username);
    }
    console.log(username);
    // console.log(website);

    two()
}
one()



const addTwo = function(number){
    return number+2
}

addTwo(4)

// hoisting - a behavior where variable and function declarations are moved to the top of their containing scope during the compile phase before the code execution. This means that you can use variables and functions before they are declared in the code
console.log(addOne(6));
function addOne(x){
    return x+1
}
