/* 
Write a progran to print the marks of a student using for loop.
obj = { harry: 98, rohan: 70, aakash: 75}
let obj = {
    harry: 98,
    rohan: 70,
    aakash: 75
}

for(let i = 0; i < 3; i++ ){
    if(i == 0){
        console.log("harry",obj["harry"])
    }
    else if(i == 1){
        console.log("rohan",obj["rohan"])
    }
    else if(i == 2){
        console.log("aakash",obj["aakash"])
    }
    else{
        console.log("Done")
    }
}
*/

/* 
Write the program in Q1 using for in loop
let obj = {
    harry: 98,
    rohan: 70,
    aakash: 75
}

for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
}
*/

/* 
Write a program to print try again until the user enters the correct number.

let answer = "Passkey"
let correctAnswer = "Passlock"

while(answer != correctAnswer){
    console.log("Enter the Password:",answer)
     console.log("try again")
     answer = "Passlock"
}
console.log("Correct")
*/