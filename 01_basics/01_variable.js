const accountId = 144553 

let accountEmail = "tdevender422@gmail.com"

var accountPassword = "12345"

accountCity = "New Delhi"

let accountState ; 

// accountId = 2 // not allowed when using const 


accountEmail = "dkt@dkt.com"

accountPassword = "12345567890"

accountCity = "Uttarakhand"

// console.log(accountId);

/* 
    Prefer not to use var 
    because of issue in block scope and functional scope
*/

console.table([accountEmail , accountPassword , accountCity , accountId , accountState])
