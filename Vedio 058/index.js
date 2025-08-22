function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your Tshirt is nice!")
    console.log("Hey " + name + " your course consistency is good too!")
}

// nice("Mobi")

// function sum(a, b, c = 3) {
//     // console.log(a + b)

//     console.log(a, b, c)
//     return a + b + c
// }

result1 = sum(3, 4)
result2 = sum(7, 5)
result3 = sum(3, 35, 1)

console.log("The sum of these numbers is:", result1)
console.log("The sum of these numbers is:", result2)
console.log("The sum of these numbers is:", result3)


// Arrow function
// const func1 = (x) =>{
//     console.log("I am an arrow function ",x)
// }

// func1(34);
// func1(66);
// func1(84);

const sum = (a, b) => {
    let c = a + b;
    return c;
}

let y = sum(1, 3)
console.log(y)