// The Double Trouble:
// You are tasked with writing a function that doubles each element in an array.However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// let arr = [5,5,5];
// let arr = [2 ,1 ,2 ,2 ,3 ,3];
let arr = [11, 11, 22, 44, 44, 55];

let doubleArr = [];

for(let i=0 ; i<arr.length ; i++) {
    let prev = arr[i];
    let curr = arr[i + 1];

    if(prev === curr) {
        doubleArr.push(prev * 2);
        doubleArr.push(curr)
        i++
    } else {
        doubleArr.push(prev * 2);
    }
}
console.log(doubleArr);
