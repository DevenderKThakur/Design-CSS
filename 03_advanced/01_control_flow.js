const isUserLoggedIn = true 

const temperature = 41

if (temperature <= 50) {
    console.log("less than 50")
}else {
    console.log("temperature is greater than 50")
}


const score = 200 

if (score > 100) {
    const power = "jedi knight"
    console.log(`${power} may the force be with you`);
    
}



const balance = 1000 

if (balance < 500) {
    console.log("less than 500")
}else if (balance < 750) {
    console.log("less than 750")
}else if (balance < 900) {
    console.log("less than 900")
}

const userLoggedIn = true 

const debitCard = true 

const loggedInFromGoogle = false 

const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
    
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 

switch(month) {
    case 1 :
        console.log("Jan");
        break
    case 2 :
        console.log("Feb");
        break
    case 3 :
        console.log("March");
        break
    default:
        console.log("Enter a valid month in numerical order");
        
}

// truthy value 
// to assume that the value is true 
//  "0" , "false" , " " , [] , {} , function () {} 


// falsey value 
// to assume that the value is false 
// false , 0 , -0 , BigInt {0n} , "" , null , undefined , NaN 

const arr = [] 

if (arr.length === 0) {
    console.log("Array is empty");
    
}

const emptyObject = {} 

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??) : null undefined 

let value ; 

value = 5 ?? 10 

value = null ?? 10 

value = undefined ?? 15 

value = null ?? 45 ?? 67 ?? undefined

// console.log(value);


// Ternary Operator 

// condition ? true : false 

const iceTeaPrice = 10 

iceTeaPrice >= 80 ? console.log("Price is greater than 80") : console.log("Price is less than 80");