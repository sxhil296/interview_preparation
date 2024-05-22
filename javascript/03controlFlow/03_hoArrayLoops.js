// for of

const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
  console.log(value);
}

const greetings = "hello, world";
for (const char of greetings) {
  console.log(char);
}

// maps
const map = new Map();
map.set("IND", "India");
map.set("PAK", "Pakistan");
map.set("FR", "France");
console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}
//forin loop doesnt't work on maps

const myObject = {
  1: "a",
  2: "b",
  3: "c",
};
// objects are not iterable by for of
// for (const [k, v] of myObject) {
//     console.log(k,v);
// }

for (const k in myObject) {
  console.log(myObject[k]);
}

// forin loop on array - returns index
const programming = ["js", "java", "python", "cpp"];
for (const lang in programming) {
  console.log(programming[lang]);
}

// forEach on array
const grades = ["a", "b", "c", "d", "e"];
grades.forEach((grade) => {
  console.log(grade);
});



const myCoding = [
  { languageName: "JavaScript", langaugeFile: "js" },
  { languageName: "Python", langaugeFile: "py" },
  { languageName: "CPP", langaugeFile: "cpp" },
];

myCoding.forEach((item)=>{
    console.log(item.languageName);
})