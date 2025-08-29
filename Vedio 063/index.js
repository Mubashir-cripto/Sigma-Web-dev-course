let arr = [1 ,2 ,4 ,5 ,7]
//  Index  0 ,1 ,2 ,3 ,4

arr[0] =5666
// console.log(arr ,typeof arr);
// console.log(arr.length);

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])
 
console.log(arr.toString());
console.log(arr.join(" and "));

let a = [1 ,2 ,3 ,4 ,5 ,6] 
console.log(a.pop())
console.log(a)
// removing one element and returning the rest pop()

console.log(a.push(100))
console.log(a)

console.log(a.push("Mobi"))
console.log(a)
// add one element at the array in the last returning the rest ,push()

console.log(a.shift())
console.log(a)
// remove the first element of the array and display the rest

console.log(a.unshift("jack"))
console.log(a)
// add an element on the beginning

delete a[6]
console.log(a)
// deletes an element in array,syntax as follows
console.log(a.length)
console.log(a[6])
// array memory is allocated but there is no value there

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [9, 8, 7]

console.log(a1.concat(a2,a3))
// does not change the existing array

let s = [21,11,98]
console.log(s.sort())
console.log(s)
// sorts the origional array

// splice function
numbers = [1 ,2 ,3 ,4 ,5]
console.log(numbers)
console.log(numbers.splice(1 , 2, 555, 333))
console.log(numbers)
// removes the splice element and also adds the items

let num = [1 ,2 ,3 ,4]
console.log(num.slice(2))
console.log(num.slice(1 ,3))
// slice function

let rev = [1 ,2 ,3 ,4]
console.log(rev.reverse())
// reverse function