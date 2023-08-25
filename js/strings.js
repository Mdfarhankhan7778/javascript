// string is a sequence of chhracters


var str = "hello pepcode";
        //0,1,2,3,4,5,6,7
console.log(str);
console.log(str[4]);
console.log(str.length);

// string methods-:

//1) extraction method

// i) slice method
// slice(start , end) -> start is inclusive and end index is exclusive
                    //  ( start,end index)
var slicedstr = str.slice(2,7); //  2nd index se shuru hoga and 6th tak katega
console.groupCollapsed(slicedstr);
console.log(str); // original source of information is not changed

var slicedstr = str.slice(6); // start se lekar pori end tak string kategi
console.log(slicedstr);

var slicedstr = str.slice(2,-4); // start se lekar aur peche se 4 chor do

console.log(slicedstr); 


// ii) substring methods

// substr(start,end) start index se shuru hoga aur aage ke kitne character capture karne h

let ans = str.substr(2,6);
console.log(ans);

// replaceing
str = "YOLO";
console.log(str);

// to lower and uppercase
console.log(str.toLowerCase()); // yolo
str= "fomo";

console.log(str.toUpperCase()); // FOMO


// concatenation methods -> combine 2 strings and make them one string
let firststr = "belive in";
let secondstr = "yourself";

let concatenatedstr = firststr + secondstr;
console.log(concatenatedstr);

// concat method
let concatstr = firststr.concat(secondstr, " and me");

console.log(concatstr);


// trim method -> removes all whitespaces of starting and ending of a string
let trimstr = "                 HEllo        how are you           ";
console.log(trimstr);
console.log(trimstr.length);

console.log(trimstr.trim());  // remove starting and ending whitespaces
console.log(trimstr.trim().length);





