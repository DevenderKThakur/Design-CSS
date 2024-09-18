"use strict"; // treat all code as newer version 

// code should be readable 

let name = "devender"

let age = 22 

let isLoggedIn = true 

let state = null 

// number(2^53) , string , boolean(true/false) , BigInt , null (standalone value) , undefined (when value is not defined) , Symbol , Object 

console.log(typeof null) // object type 

console.log(typeof undefined) 

// how the data is stored and accesed in the memory defines the type of data


// Primitive datatype 

// String , Number , Boolean , null , undefiend , Symbol , BigInt

const score = 100 
const scoreValue = 100.3
const userLoggedIn = false 
const temperature = null 
let userEmail = undefined ; 

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId)

// Non-Primitive Type 

// Array , Objects , Functions 

const heros = ["Shaktiman" , "Naagraj" , "Doga"]

let myObjectValue = {

    name : "Devender" , 
    age : 22 , 

}

const myfunc = function() {
    return "Hello World!"
}

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "Devender Kumar Thakur"

let anothername = myYoutubeName

anothername = "chaiaurcode"

console.log(myYoutubeName)
console.log(anothername)

let userOne = {
    email : "user@google.com" , 
    upi : "user@ybl" 
}

let userTWo = userOne

userTWo.email = "tdevender422@gmail.com" 

console.table([userOne.email , userTWo.email])
