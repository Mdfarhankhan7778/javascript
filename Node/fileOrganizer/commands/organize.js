const fs = require("fs"); // fs module
const path = require("path"); // path module

let types= {
    media: ["mp4","mkv","mp3"],
    archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
    document:["docx","doc","pdf","xlsx"],
    app:[`exe`,`dmg`,`pkg`,`deb`],
    image:[`png`,`jpg`,`jpeg`]
}

function organize(srcPath){
    if (srcPath == undefined){
        // the peocess.cwd() method returns the current working directory of the node.js process.
        // console.log(srcpath); // undefined
        srcPath = process.cwd();
       // console.log("source path is ",srcPath);
    }

    let organizedFiles = path.join(srcPath,"organized-files");
    console.log("organized files folder path is", organizedFiles);
    if(fs.existsSync(organizedFiles) == false){ 
         // organizedFiles nam ka folder exist nhi karta to ek folder bana do warna rahne do
    fs.mkdirSync(organizedFiles);
    }
    else
        console.log(`folder already exists`);
    
}
organize();