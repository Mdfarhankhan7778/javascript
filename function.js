// 3 types of function
// 1) normal function
// fuction defination
//function function_name(param1,param2){
    // do something
//}
//function invoke/call
// function_name(arg1,arg2);

function add(a,b){
    console.log(a+b);

}
add(2,8);




function calculator(str,a,b){

    if(str==`add`){
        return function add(){
            console.log(a+b);
        }

    }

}  
let returnedFunc = calculator(`add`,2,5);
console.log("returned function is\n"+returnedFunc)
returnedFunc();

//2) Fuction expression -:

//let variable_name-fuction(){
 // do something
// }
//name of variable is used to invoke the function
// variable_name();

let sayHi=function(){
    console.log("i am funcgion expression");

}
console.log("line 54\n" +sayHi);
sayHi();

let sayBye = function (){
    console.log("buy guys");


};
console.log("line 53\n" + sayHi);
sayHi();
console.log("line 55\n" + sayBye);
sayBye();


// 3) IIFE -> imediately invoke function expression 

function add(a,b) {
    return a+b
}
add (2,3);

let additionIIFE = (function add(a,b){
    console.log(a+b);


})(20,30);

// console.log(additionIIFE);
// console.log(additionIIFE(20,30));

