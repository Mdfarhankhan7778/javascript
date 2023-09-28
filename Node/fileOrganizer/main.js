// entery point of my command

let helpFunc = require("./commands/help");   // import help file
// console.log(helpFunc.ghoda());


let inputArr = process.argv.slice(2);
let command =  inputArr[0];
let path = inputArr[1];
switch(command){
    case "tree":
        // call tree function
        console.log("tree function called and executed succesfully on path"+path);
        break;
    case "organize":
        // call organize function
        console.log("organize fuction called and executed successfully on path"+path);
        break;
    case "help":
        // call help function
        helpFunc.help();
       // console.log("help fuction called and executed successfully")
        break;
        default:
            console.log("command not recognized :/")
            break;
}
