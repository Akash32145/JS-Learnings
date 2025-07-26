// dates 

let myDate = new Date(); 
// console.log(myDate);                    // 2025-07-26T07:24:31.726Z
// console.log(myDate.toString());           // Sat Jul 26 2025 07:24:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());          // Sat Jul 26 2025 
// console.log(myDate.toLocaleDateString());    // 7/26/2025
// console.log(typeof myDate);               // object 

// let myCreatedDate = new Date(2025, 6, 26);          // here month starts from 0(Jan) 
// let myCreatedDate = new Date(2025, 6, 26, 5, 3);    // 7/26/2025, 5:03:00 AM
// let myCreatedDate = new Date("2025-01-26");       // 1/26/2025, 12:00:00 AM // here month starts from 1 // yyyy-mm-dd
let myCreatedDate = new Date("01-26-2025");       // 1/26/2025, 12:00:00 AM // here month starts from 1  // mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now();  // 1753515236413 // miliseconds till now from 1970 jan 1 

// console.log(myTimeStamp);  
// console.log(myCreatedDate.getTime()); // 1737849600000 // miliseconds till my created date from 1970 jan 1 
// console.log(myCreatedDate.getTime()/1000); // 1737849600 in seconds 


let newDate = new Date(); 
console.log(newDate); // 2025-07-26T07:39:27.121Z 
console.log(newDate.getMonth() + 1); // starts from 0(Jan) // did +1 to get 1(jan)
console.log(newDate.getDay()); // satarday(6th day)

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})