let score = "33"  

console.log(typeof score)

let valueInNumber = Number(score)

console.log(valueInNumber)

console.log(typeof valueInNumber)

// "33" => 33 

// "33abc" => NaN

// true => 1 ; false => 0 

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.table([typeof booleanIsLoggedIn , booleanIsLoggedIn])

// "" => false 

// "devender" => true 

let someNumber = 33 

let stringNumber = String(someNumber)

console.table([stringNumber, typeof stringNumber])

// Operations 

let value = 3 

let negativeValue = -value

console.log(negativeValue);


let str1 = "Devender"

let str2 = " Thakur"

let str3 = str1 + str2

console.log(str3);

console.log(typeof ("1" + 2))

console.log(typeof (1 + "2"))

console.log(+true);

let gameCounter = 100 

++gameCounter

console.log(gameCounter)
