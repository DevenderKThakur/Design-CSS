// arrays 

const arr = [1,2,3,4,5 , true , "devender"]

// console.log(arr[5]);

// array creates shallow copies (share the same refrence)

// deep copies (do not share the same refrence)

const indianHeros = ["Shaktiman" , "naagraj" , "doga"]

const arr2 = new Array(1,2,3,4)

arr2.push(5) 

arr2.pop()

arr2.unshift(0) // add's the value to the start of the array

arr2.shift()

console.log(arr2.includes(1)) // return bool val 

console.log(arr2.indexOf(2)) // checks the value is in the array 

const stringArr = arr2.join() 

console.log(stringArr)

console.log(arr2)

const sliceArr = arr2.slice(1,3) // returns the section of the array 

console.log(sliceArr)

// slice manipulates the original array 






