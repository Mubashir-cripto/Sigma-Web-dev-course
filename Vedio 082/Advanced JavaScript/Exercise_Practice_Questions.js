
// Practice Set Questions:
// Q1:
// async function printName(name) {
//     return new Promise((resolve ,reject) => {
//         setTimeout(() => {
//             resolve(name);
//         }, 2000); 
//     })
// }

// (async function main() {
//     let a = await printName("Hello");
//     console.log(a);

//     let b = await printName("World");
//     console.log(b);
// })()

// Q2:

// function findAverage(...numbers) {
//     const sum = numbers.reduce((acc, nxt) => acc + nxt)

//     return sum / numbers.length;
// }

// try {
//     const nums = [5 ,15 ,25];
//     const avg = findAverage(...nums);
//     console.log(`Average :${avg}`);
// } catch(err) {
//    console.log(err.message);
// }


// Q3:

async function timeResolved(time ,text) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, time); 
    })
}

(async function main() {
    const randomNumber = () => {
       return  1 + 6 * Math.random() * 1000;
    }

    let a = await timeResolved(randomNumber() ,"Hello");
    console.log(a);
   
    let b = await timeResolved(randomNumber() ,"Mubashir");
    console.log(b);

    let c = await timeResolved(randomNumber() ,"How are you ,Hope going all Good");
    console.log(c);
})()

