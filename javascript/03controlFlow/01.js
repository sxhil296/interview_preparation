// if

const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("yes");
}

if (2 == "2") {
  console.log("executed");
}

if (2 === "2") {
  console.log("exxecutedd");
} else {
  console.log("strickly checked");
}
console.log("always");

bal = 400;
if (bal < 500) {
  console.log("Below 500");
} else if (bal < 300) {
  console.groupEnd("below 300");
} else {
  console.log("rich");
}

// switch
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("default");
    break;
}


// truthy values
// 1, "0", -1, "false", [], {}, " ", function(){}

//falsy values
//"", 0, -0, 0n, false, null, undefined, NaN


//nullish coalescing operator (??) : null undefined
let val1;
val1 = 5 ?? 10;
console.log(val1);

let val2 = null ?? 10;
console.log(val2);

let val3 = undefined ?? 10;


// ternary - short hand if else
condition ? true: false


