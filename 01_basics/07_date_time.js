// Jan 1970 arbitary date from where the date time is calcualted 

let myDate = new Date () 

console.log(myDate.toString())

console.log(myDate.toDateString());

console.log(myDate.toLocaleString())

console.log(myDate.toLocaleDateString())

let myCreatedDate = new Date("08-04-2024")

console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now() 

console.log(timeStamp)

console.log(myCreatedDate.getTime())

console.log(Math.round(Date.now() / 1000))

let firstDate = new Date () 

console.log((firstDate.getMonth()) + 1 )

const sentence = `On ${firstDate.getDate()} month ${firstDate.getMonth() + 1 } there was something peculiar happening on the other side of the globe `

// console.log(sentence);

firstDate.toLocaleString("default" , {
    weekday : "long" , 
    timeZone : "" , 
}) 
