// The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr = [1, 2, -1, 22, -4, 0, 21];

function sumAllTillNegative(arr) {
    let total  = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            continue;
        } else {
            total += arr[i];
        }
    }
    return total;
}
console.log("The sum is :" + sumAllTillNegative(arr));