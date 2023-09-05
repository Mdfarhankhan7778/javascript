var ans = "5"+ 1; // "5"+"1" -> 51  + sign is addition and concate
var ans1 = 1 + "5"; // "1"+"5" -> 15
console.log(ans);
console.log(ans1);

console.log(null*5);  // null is converted to 0 hence output is 0
console.log(undefined*5);  // NAN
console.log("5"-1);  // 5-1 = 4 -> 5 will be change into intrger
console.log(null*"5"); // 0 anything multiplied by zero is obiosly 0

console.log("ten"*3); // NAN  -- "ten" string cannot be mapped to a number like "5" can be mapped to number 5 hence the output is NAN
console.log("10"*3);  // 30