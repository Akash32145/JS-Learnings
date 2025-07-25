//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 103; 
const anotherScore = 103.54 // js can  store int, float, double in 'number' datatype // we do not have to tell explicitely 

const isLoggedIn = false; 
const outsideTemp = null; 
let userEmail; 

const id = Symbol('123') // symbol make it unique
const anotherId = Symbol('123') // anotherId is unique, even thogh their values are same 

console.log(id === anotherId); // false 


const bigNumber = 3456543576654356754n // n in te end of a number makes it of bigint datatype 


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["spiderman", "superman", "ironman", "batman"]; 

let myobj = {
    name: "Akash", 
    age: 21
}

const myfunction = function(){
    console.log("Hello worldd"); 
}


console.log(typeof myfunction);  // function 

// https://262.ecma-international.org/5.1/#sec-11.4.3