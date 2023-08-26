// javascripts objects are always in key value pair

let obj = {};
console.log(obj);

let person = { // person is a object
  // key(property,method) : value
    name: "farhan",
    age: 22,
    gender: "male", // collection of data is called object 
    height: "170cm"
};
console.log(person);
console.log(`Hey ${person.name}, thank you foe shopping up`);
console.log(person.gender);   // dot notation   output--male
console.log(person["gender"]); // bracket notation  output--male


let str = "Hello";
console.log(str.length); // dot notation
console.log(str["length"]);  // square bracket notation


// nesting of objects

let captainAmerica = {
    firstName: "steve",
    lastName: "rogers",
    friends: ["Bucky", "Tony" , "Brue Banner"], // array type data
    age: 102,
    isAverage: true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },


sayHi: function(){
    console.log(`Hello my name is ${this.firstName}` );
        
    

}
};
console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log("printed using bracket notation "+captainAmerica["friends"][0]);
captainAmerica.sayHi();  // method accessing

console.log(captainAmerica.address.city);


// for loop
// in keyword injs is used to get keys from that objects  -- in keywod hai
for(let abc in captainAmerica){
    // key k jagah m kuch v write kar sakhte hai
    console.log(abc);  // key print hoga like firstName
    // variable ke ander jo binded value h wo cahiye
    console.log(captainAmerica[abc]); // bracket notation usage  // value peint hoga

}
console.log(typeof captainAmerica.isAverage);  // boolen print hoga

// deleteing the key of an object
delete captainAmerica.lastName;
console.log(captainAmerica.lastName);

// this keyword
let car = {
    name: "Ferrari",
    model: 2022,
    startEngine: function (){
        console.log(`starting the engine of the car ${this.name}`)
    }

}
car.startEngine();


