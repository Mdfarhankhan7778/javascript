function yolo(){
    var a=10;
    function cb(){
        console.log("hello how are you ?")
    }
    // function to be executed(callback fun) , time(ms) after which cb to be executed
    // 1 second = 1000 milli second
    setTimeout(cb,5000);
    console.log(a);
}
yolo();
let b= 100;
console.log(b);
// setTimeout()- wait for a specified no, of time and then execute, it is use for delaying but why delay for our code to execute it should be fast for performance na?



// pahle 10 print hoga phir 5000sec k baad hello how are you print hoga
