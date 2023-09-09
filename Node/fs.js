// fs-> file system module. it helps us 

const fs = require("fs");  // require(" path of the file")
// appendFileSync appends data into a file, if file is not present , it creates the file and then appends the data
let res=fs.appendFileSync("f1.txt","hello i am f2 file");
fs.appendFileSync("f1.txt","\nyou guys are smart");
// console.log(res);

let data = fs.readFileSync("f1.txt","utf-8"); // utf is like a encoding , it decodes to encodes
// data received is an object type,data is in buffer 
console.log(data);

// const f1 = require("'/f1.txt");
//const abc= require("../js/temp");
// require method , goes to the file that is needed to be required .executes that file.
// console.log(abc);

