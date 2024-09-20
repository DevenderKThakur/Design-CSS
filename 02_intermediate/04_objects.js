// const tinderUser = new Object() 

const tinderUser = {

}

tinderUser.id = "123abc" 
tinderUser.name = "Sammy" 
tinderUser.isLoggedIn = false 


// console.log(tinderUser)

const regularUser = {
    emial : "some@gmail.com" , 
    fullname : {
        userFullName : {
            firstname : "firstname" , 
            lastname : "lastname"
        }
    }
}

console.log(regularUser.fullname?.userFullName.firstname);


const objectOne = {
    1 : "a" , 
    2 : "b"
}
const objectTwo = {
    3 : "a" , 
    4 : "b"
}

// const objectThree = {
//     objectOne , objectTwo
// }

// const objectThree = Object.assign({} , objectOne , objectTwo)

const objectThree = {...objectOne , ...objectTwo}

console.log(objectThree);

const users = [
    {
        id : 1 , 
        email : "dkt@gmail.com"
    },
    {
        id : 2 , 
        email : "dkt@gmail.com"
    },
    {
        id : 3 , 
        email : "dkt@gmail.com"
    },
    {
        id : 4 , 
        email : "dkt@gmail.com"
    },
]


console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename : "JS in hindi" , 
    courseprice : 999 , 
    courseInstructor : "devender"
}

// de-structuring of the object 

const {courseInstructor : instructor} = course

const {coursename : javascriptCourse} = course 

const {courseprice : price} = course 


console.log(`${javascriptCourse} is being taught by ${instructor} at the price of $${price}`)

// JSON Format 

// {
//     {
//         "username" : "devender" , 
//        " coursename" : "Javascript" , 
//         "coursePrice" : "free" 
//     }
// }


[
    {

    },
    {
        
    }
]




