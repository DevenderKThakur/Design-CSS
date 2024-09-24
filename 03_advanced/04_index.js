const programmingLang = ["javascript" , "ruby" , "java" , "python" , "cpp"]

// programmingLang.forEach(function (item) {
//     console.log(item);
    
// })

// programmingLang.forEach((item)=>{
//     console.log(item);
    
// })

function printMe (item) {
    console.log(item);
    
}

// // Give refrence to the function not execute them 
// programmingLang.forEach(printMe)

programmingLang.forEach((item , index , arr)=>{
    console.log(item , index , arr);
    
})

const coding = [
    {
        languageName : "javascript" , 
        langextension : ".js" 
    },
    {
        languageName : "python" , 
        langextension : ".py" 
    },
    {
        languageName : "java" , 
        langextension : ".java" 
    }
]

coding.forEach((item) => {
    console.log(item["langextension"]);
    
})