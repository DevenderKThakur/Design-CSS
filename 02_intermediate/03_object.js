// singelton is not created when writing object literal 

// object literal 

const mySymbol = Symbol("firstKey")

const jsUser = {
    username : "devender" ,
    "full name" : "Devender Kumar Thakur" ,
    [mySymbol] : "firstKey" , 
    age : 22 , 
    location : "New Delhi" , 
    email : "dkt@google.com" , 
    isLoggedIn : false , 
    lastLoginDays : ["Monday" , "Saturday"]
}


jsUser.email = "dkt@chatgpt.com"

console.log(jsUser);

console.log(jsUser["email"]);

console.log(jsUser["full name"]);

// Object.freeze(jsUser)

jsUser.greeting = function () {
    console.log("hello js user")
}

jsUser.greetingTwo = function () {
    return `Hello JS user , ${this.username} `
}

console.log(jsUser.greetingTwo())
