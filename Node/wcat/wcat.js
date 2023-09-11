// 1)node wcat.js filepath => display the contents of a file in terminal
// 2)node wcat.js filepath 1 filepath2 filepath3 => display the content of all files in terminal in concatination form in given order
//3) node wcat.js -n file1 file2 file3 or node wcat.js -n file1
//node wcat.js f1.txt
// node wcat.js f1.txt f2.txt f3.txt
const fs = require("fs");
let inputArr = process.argv.slice(2);
console.log(inputArr);

let filesArr = [];
let optionsArr = [];
// -------------------- placed files path in fileArr -----------------------
for(let i = 0; i<inputArr.length;i++){
    filesArr.push(inputArr[i].charAt(0));

}
// console.log("file to be read are "+filesArr);

//==============================check is all the files are present

for(let i = 0; i<filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("Files does not exist");
        return;
    }
}

// ======================content read and appending starts
let content = "";
for(let i=0; i<filesArr.length; i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content=content + fileContent+"\r\n";

}
console.log(content);

let contentArr = content.split("\r\n");
console.table(contentArr);

// check -s is present or not
let isSpresent= optionsArr.includes("-s");
if(isSpresent){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1] == ""){
            contentArr[i] = null;
        }

    }
    console.table(contentArr);
    let tempArr = [];
    // push everything in tempArr except null
for(let i=0;i<contentArr.length;i++){
    if(contentArr[i]!=null){
        tempArr.push(contentArr[i]);

    }
}
console.log("data after removing extra lines\n",tempArr);
}
contentArr = tempArr;

let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");
// if 

let finalOption = "";
// if both -n and -b are present
if(indexOfN!=-1 && indexOfB!=-1){

if(indexOfN<indexOfB){
    finalOption="-n";

}
else {
    finalOption = "-b";

}
}

// either -n is present or -b is present
else {
    if (indexOfN != -1){
        finalOption = "-n";
    }
    else if(indexOfN != -1) {
        finalOption="-b";
    }
}

// calling of function by evaluating finalOption

if(finalOption == "-n"){
    modifiyContentByN();
}
else if (finalOption == "-b"){
    modifiyContentByB();
}

function modifiyContentByN(){
    for(let i = 0; i<contentArr.length;i++){
         contentArr[i] = (i+1) + ")" + contentArr[i];
    }
}

function modifiyContentByB(){
    let count = 1;
    for(let i = 0; i<contentArr.length;i++){
        if (contentArr[i] !=""){
        contentArr[i] = count +")" + contentArr[i];
        count ++;
    }   
}
}