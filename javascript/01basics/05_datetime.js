// 1 jan 1970
// in miliseconds


let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate)); //object

let myCreatedDate = new Date("05-19-2024")
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());