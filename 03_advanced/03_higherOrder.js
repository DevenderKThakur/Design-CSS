// for of 

function forOfLoopOnArray () {
    const arr = [1,2,3,4,5]

    for (const element of arr) {
        console.log(element);
    
    }
}

function forOfLoopOnString () {
    const greeting = "Hello World !"

    for (const greet of greeting) {
        if (greet === " ") {
            continue
        }
        console.log(greet);
        
    }
}

// Maps 

const map = new Map () 

map.set("IN" , "India")
map.set("USA" , "United States Of America")
map.set("Fr" , "France")

for (const [key , value] of map) {
    console.log(`${key} ${value}`);
    
}

// Object cannot be iterated using forof loop 

const lang = {
    js : "javascript" , 
    cpp : "C++" , 
    rb  : "ruby",
    java : "java"
}

for (const key in lang) {
    console.log(lang[key]);
    
}

// when using forin loop on array it (key) does not print the value of the array but the index

const programming = ["js" , "java" , "cpp" , "py"]

for (const key in programming) {
    console.log(programming[key]);
    
}



