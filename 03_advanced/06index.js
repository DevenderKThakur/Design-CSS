const arr = [1,2,3,4,5,6,7,8,9,10]

const addTenInArr = arr.map((val)=>{
    return val + 10 
})

// console.log(addTenInArr);

// let newArr = [] 

// arr.forEach((val)=>{
//     newArr.push(val + 10)
// })

// console.log(newArr);

const anotherArr = arr.map((num) => {
    return num * 10 
}).map((num) => {
    return num + 1 
}).filter((val) => {
    return val >= 40 
})

// console.log(anotherArr);

const initialVal = 0 

const reduceArr = arr.reduce((accumlator , currentvalue) => {
    return accumlator + currentvalue 
} , initialVal)

// console.log(reduceArr);

const shoppingCart = [
    {
        itemName : "javascript" , 
        price : 2999 
    },
    {
        itemName : "python" , 
        price : 999 
    },
    {
        itemName : "mobile app dev" , 
        price : 5999 
    },
    {
        itemName : "data science " , 
        price : 12999 
    },
]

const totalPrice = shoppingCart.reduce((accumalator , currentval) => {
    return accumalator + currentval.price 
} , 0)

console.log(`$${totalPrice}`);



