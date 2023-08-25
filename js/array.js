// Array -> is a collection of element
let cars = [`BMW`, "AUDI" ,"MG",1,2,3];
// in js you can store different values of differents types in an Array
console.log(cars);


//accessing the element of an array
console.log(cars[0]);
console.log(cars[3]);

// replacing element in array
cars[3] = "Mahindra";
console.log(cars);

// adding element in array
cars[7] = "Honda";
console.log(cars);

// methods of an array
//1) pop methos-: this method removes the element from the last of array
cars.pop();
console.log("after popping the element\n" + cars);

//2) push methos-: it pushes a new Element at then end of array
cars.push("TATA");
console.log("After pushing an element");
console.log(cars);

// 3) unshift method -> this adds element at the starting of array
cars.unshift("JLR");
cars.unshift("mustang");
console.log(cars);

// 4) shift method-> it removes element from 0th index of array
 cars.shift();
 cars.shift();
 console.log(cars);

 // to know the length of an array
 console.log(cars.length);

 // 2d array
 let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ];
 // ["a","b","c"] array of strings
 // [1.2.3] array of number
 console.log(array2d); // prints of 2d array
 console.table(array2d); // prints 2d array in the form of table
 let res = array2d[1]; // [4,5,6]
 console.log(res);
 console.log(res[2]);  // 6
 console.log(array2d[1][2]);
 console.log(array2d[1][3]); // undefined

 console.log(array2d.length);  // number of rows in a 2d array > 4
 console.log(array2d[1].length); // number of colums in a 2d array > 3

 // how to put value in 2d array
 array2d[1][1] = false;
console.table(array2d);


