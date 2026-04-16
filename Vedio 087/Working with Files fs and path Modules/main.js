const fs = require("fs");
// const fs = require("fs/promises")

console.log(fs)

console.log("Starting")
// fs.writeFileSync("Harry.txt" ,"Harry is a good boy")
fs.writeFile("Harry2.txt" ,"Harry is a good boy 2" ,() => {
    console.log("done");
    fs.readFile("Harry2.txt" ,(error ,data) => {
        console.log(error ,data.toString());
    })
})

fs.appendFile("Harry.txt" ,"MobiRobo" ,(error ,data) => {
       console.log(data.toString());
})

console.log("Ending")