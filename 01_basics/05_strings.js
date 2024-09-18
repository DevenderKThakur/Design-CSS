const firstName = "devender" 

const repocCount = 50 

console.log(firstName + repocCount)

console.log(`Hello my name is ${firstName}. My git-hub repo count is ${repocCount}`)

const gameName = new String ("Devender-dkt-com")

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf("e"))

const newString = gameName.substring(0,gameName.indexOf("-"))

console.log(newString);

const anotherString = gameName.slice(0,4)

console.log(anotherString)

const username = "  devender  "

console.log(username);
console.log(username.trim());

const url = "https://devender.com/devender%20thakur"

console.log(url.replace("%20" , "-"));

console.log(url.includes("devender")) //checks the substring is in the string and returns true or false 

console.log(gameName.split("-")); // converts string to array 


