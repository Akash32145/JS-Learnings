const score = 400; 
// console.log(score);  // 400 

const balance = new Number(100); // here we can have few functions that we don't get to use in score 
// console.log(balance);  // [Number: 100]

// console.log(balance.toString()); // changed it to a string 
// console.log(balance.toString().length);  // shows us how many numbes are there in balance 

const otherNumber = 123.897; 
// console.log(otherNumber.toPrecision(3)); // 124 // precise upto 3 numbers 
// console.log(otherNumber.toPrecision(4)); // 123.9 // precise upto 4 numbers 
// console.log(otherNumber.toPrecision(2)); // 1.2e+2; // precise upto 2 numbers 

const num = 100 ; 
// console.log(num.toFixed(2)); // 100 

// console.log(otherNumber.toFixed(2)); // 123.90 // round up and then shows till 2 decimal   


const value = 10000000; 
// console.log(value.toLocaleString()); // 10,000,000 - usa 
// console.log(value.toLocaleString('en-IN')); // 1,00,00,000 - india



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math);  // Object [Math] {}
// console.log(Math.abs(-4)); // 4 
// console.log(Math.abs(4)); // 4 
// console.log(Math.round(4.6)); // 5 
// console.log(Math.round(4.3));  // 4 
// console.log(Math.floor(4.9)); // 4 // show only the numbers before decimal 
// console.log(Math.min(4, 3, 6 ,8)); // 3 
// console.log(Math.max(4, 3, 6 ,8)); // 8



console.log(Math.random()); // gives us a number between 0 and 1 
console.log(Math.random() * 10 + 1);  // number b/w 1-10 
console.log(Math.floor(Math.random() * 10 + 1));  // gives us a random integer b/w 1 - 10 

const min = 10; 
const max = 20; 

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 0.01 - 10.99 // 0 - 10 // 10 - 20 