let arr = [1 ,13 ,5 ,7 ,11];
let newArr = []

// For printing the square of the array and storing it in the new array

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     // newArr.push(element ** 2)
// }

// do the same thing 
// for one element you can to = arr.map(e=>{...})

// map method
newArr = arr.map((e ,index  ,array)=>{
    return e ** 2
})

console.log(arr)
// console.log(newArr)

// Filter method
const greaterThanSeven = (e) =>{
   if(e > 7){
       return true
    }
   else{
       return false
   }
}

console.log(arr.filter(greaterThanSeven))

// reduce method

let arr2 = [1 ,2 ,3 ,4 ,5 ,6];

const red = (a ,b) => {
    return a * b
}

console.log(arr2.reduce(red))

// when you want to run a function and you want it to run on a function like above you use reduce function

