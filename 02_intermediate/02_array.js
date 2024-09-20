const marvelHeros = ["Thor" , "Ironamn" , "Spiderman"]

const dcHeros = ["superman" , "flash" , "batman"]

// marvelHeros.push(dcHeros)

const allHeros = marvelHeros.concat(dcHeros)

// concat returns new array 

console.log(allHeros)

const allNewHeros = [...marvelHeros , ...dcHeros]

console.log(allNewHeros)

const anotherArr = [1,2,3,[4,5,6] , 7, [8,9,10]]

const usableAnotherArr = anotherArr.flat(Infinity)

console.log(usableAnotherArr)


console.log(Array.isArray("Devender")); // check is array or not 

console.log(Array.from("Devender")); 

console.log(Array.from({username : "Devender"})); 

let scoreOne = 100 

let scoreTwo = 200 

let scoreThree = 300 

console.log(Array.of(scoreOne,scoreTwo,scoreThree))




