const account_id = 12354; 
let account_email = "akas@google.com"; 
var account_password = "45321"; 
account_city = "Kolkata"; 
let account_state; 

// we can't change the const variable 
// don't use var, it has block scope and functional scope issues 

console.log(account_id); 

console.table([account_id, account_email, account_password, account_city, account_state]); 