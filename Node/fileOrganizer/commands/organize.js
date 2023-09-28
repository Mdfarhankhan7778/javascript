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

    let organizedFiles = path.join(srcPath,"organized_files");
    console.log("organized files folder path is", organizedFiles);
    if(fs.existsSync(organizedFiles) == false){ 
         // organizedFiles nam ka folder exist nhi karta to ek folder bana do warna rahne do
    fs.mkdirSync(organizedFiles);
    }
    else
        console.log(`folder already exists`);
    


    // 3. scan the entire srcpath(downloads folder in this case)

    // reads the content of the directory -> bascally reads the names of files present in directory

    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

    //4) traverse over all the files and classify them on the basis of their extention (.pdf,.mp3)

    for(let i=0; i<=allFiles.length;i++){
       // let ext = allFiles[i].split(".")[1];
       //let exe = path.extname(allFiles[i]);
       // console.log(ext);

       let fullpathOfFile = path.join(srcPath,allFiles[i]);
       // console.log(fullPathOfFile)

       let isFile = fs.lstatSync(fullpathOfFile).isFile();
       console.log(allFiles[i]+" is "+isFile);
       if(isFile){

        let exe = path.extname(allFiles[i]).split(".")[1];
        let folderName = getFolderName(exe);

        copyFileToDest(srcPath,fullPathOfFile,folderName);
       }



    }
}
  function getFolderName(srcPath){
    return folderName;
  }

  function copyFileToDest(srcPath,fullPathOfFile,folderName){
    

  }
let srcPath= "\Users\Dell\OneDrive\Desktop\pepcoding\Node\fileOrganizer\download"
organize(srcPath);
