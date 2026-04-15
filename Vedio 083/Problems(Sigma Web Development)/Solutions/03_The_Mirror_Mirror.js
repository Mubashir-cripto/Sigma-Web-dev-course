// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str1 = "Hey my name is Mubashir";

let copyStr1 = "";

for(let i=str1.length - 1 ; i >= 0 ; i--) {
    
    copyStr1 = copyStr1 += str1[i];
}

let mirror = str1 + ")" + "(" +copyStr1;

console.log(copyStr1);
console.log(mirror);