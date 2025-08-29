// Chapter 5- Prachce Set

// (1 :-) Create an array of numbers and take input from user to add numbers to this array.

// let array_numbers = []

// while(true){
//     let number = prompt("Enter a number Or type \"exit\" to stop");

//     if(number === null || number.toLowerCase() === "exit"){
//         break;
//     }

//     if(!isNaN(Number(number)) && number.trim() !== ""){
//         array_numbers.push(Number(number))
//     }
//     else{
//         alert("Enter a valid number")
//     }
// }
// console.log("Final Array:", array_numbers);


// (2 :-) Keep adding numbers to the array in 1 until 0 is added to the array.
// let array_numbers = []

// while(true){
//     let number = prompt("Enter a number Or type \"exit\" to stop");

//     if(number === null || number.toLowerCase() === "exit"){
//         break;
//     }

//     if(!isNaN(Number(number)) && number.trim() !== ""  && number != 0){
//         array_numbers.push(Number(number))
//     }
//     else{
//         alert("Enter a valid number (Or You have entered \"0\" or \"null\")")
//     }
// }
// console.log("Final Array:", array_numbers);



// (3 :-) filter for numbers divisible by 10 from a given array.

// let array = [10, 44, 50, 100, 23, 45, 300, 99, 420, 3]

// const DivisibleByTen = (e) => {
//     if (e % 10 === 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// (4 :-) console.log("The numbers divisible by 10 are:",array.filter(DivisibleByTen))


// Create an aray of square of given numbers

// let array = [1 ,3 ,4 ,5 ,55]
// let new_array = []

// new_array = array.map((e) => {
//     return e ** 2
// })

// console.log("Original Array:",array)
// console.log("New Squared Array :",new_array)


// (5 :-) Use reduce to calculate factorial of a given number from an array of first n natural numbers.(n being the number whose factorial needs to be calculated.

function factorial(number) {
    let array = []
    for (let i = 1; i <= number; i++) {
        array.push(i)
    }
    const redu = (a, b) => {
        return a * b
    }
    return array.reduce(redu)
   
}
console.log(factorial(10))