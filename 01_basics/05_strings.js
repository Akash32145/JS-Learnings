const name = "Akash"; 
const repoCount = 50; 

// console.log(name + repoCount + "Value"); 

console.log(`I am ${name} and my repocount is ${repoCount}`); 

const gameName = new String("Akash-ag-com");  // this gives below functions, this is ans object, we can have some functions that we don't get to use in normal string 
// console.log(gameName[0]);  // char at 0th index 
// console.log(gameName.__proto__); 

console.log(gameName.split('-'));  // [ 'Akash', 'ag', 'com' ]

const newString = gameName.substring(2, 4); 
// console.log(newString);   // shows from index 2 to index 4 // 'as' 

const anotherString = gameName.slice(-8, 6); // starts from 12-8 = 4th index and shows till 6th index 
console.log(anotherString); 

const anotherNewString = "    Akash     "; 
console.log(anotherNewString); 
console.log(anotherNewString.trim());  // deletes the excess spaces 

const url = "https://hitesh.com/hitesh%20choudhary"; 

console.log(url.replace('%20', '-'));  // https://hitesh.com/hitesh-choudhary

console.log(url.includes("hitesh")); // "hitesh" exists inside url or not // true ;
console.log(url.includes("Akash"));  // "Akash" exists inside url or not // false ; 


 