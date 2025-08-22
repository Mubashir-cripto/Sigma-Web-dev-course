/* 
Exercise 9 - Faulty Calculator

Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operations 10% of the times  

*/

// let a = Math.random() < 0.1
// console.log(a)

if (Math.random() < 0.1) {
    function Plus(a, b) {
        return a - b
    }
    function Multiply(a, b) {
        return a + b
    }
    function Subtract(a, b) {
        return a / b
    }
    function Divide(a, b) {
        return a ** b
    }
}
else {
    function Plus(a, b) {
        return a + b
    }
    function Multiply(a, b) {
        return a * b
    }
    function Subtract(a, b) {
        return a - b
    }
    function Divide(a, b) {
        return a / b
    }
}

let x = Plus(1, 2)
let y = Multiply(2, 2)
let z = Subtract(4, 2)
let d = Divide(6, 2)

console.log("The sum of these two numbers is:", x)
console.log("The multiplication of these two numbers is:", y)
console.log("The subtraction of these two numbers is:", z)
console.log("The division of these two numbers is:", d)