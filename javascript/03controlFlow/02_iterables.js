// for loop -  used to execute a block of code a specific number of times

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("High five");
    continue;
  }
  console.log(i);
}

// for (let i = 0; i <= 10; i++) {
//    for(let j = 0; j <= 10; j++){
//     console.log(`Inner loop j : ${j} and inner loop i : ${i}`);
//    }
//     console.log(`outer loop i: ${i}`);
// }

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}

let myArray = ["sahil", "emir", "khan"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

const myArray2 = [1, 2, 3, 4, 5];
for (let x = 0; x < myArray2.length; x++) {
  if (x == 4) {
    console.log("breaking, 4 detected!");
    break;
  }
  console.log(x);
}

// while loop -while loop checks the condition before executing the block of code
let i = 0;
while (i <= 10) {
  i++;
  if (i == 5) {
    console.log("five detected, skippin it");
    continue;
  }
  if (i == 8) {
    break;
  }
  console.log(i);
}

let arr = 0;
while (arr < myArray.length) {
  console.log(myArray[arr]);
  arr++;
}

// do while loop - executes the code block once before checking the condition. 
let score = 1

do {
    console.log(`Score if ${score}`);
    score++
} while (score <=10)