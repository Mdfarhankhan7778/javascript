const fs = require(`fs`);
console.log("before");

// let data = fs.readFileSync("f1.txt",cb); // sync - jab tak mai data read nhi padhuga tab tak aage nhi jayega
// function cb(err,data){
//     if(err){
//         console.log(err);
//     }                       // async
//     else{
//         console.log(data+"");
//     }
// }

// promises working
let promisesThatFileWillBeRead = fs.promises.readFile("f1.txt");

console.log(promisesThatFileWillBeRead);


promisesThatFileWillBeRead.then(printData);
promisesThatFileWillBeRead.catch(printData);

console.log("after");

function printData(data){
    console.log("promises is fulfilled");
    console.log(data+"");
}

function printError(err){
    console.log(err);

}
 