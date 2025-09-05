console.log("Script.js initilization")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 =  Math.ceil(0 + Math.random() * 255)
    let val2 =  Math.ceil(0 + Math.random() * 255)
    let val3 =  Math.ceil(0 + Math.random() * 255)
    return `rgb(${val1} ,${val2} ,${val3})`
}
Array.from(boxes).forEach( e => {
    e.style.backgroundColor =  getRandomColor()
    e.style.color =  getRandomColor()
});


// To find random number between two numbers
// random is b/w 0 and 1 ,as a is zero and b is 255 in this case and is random is 0 you get a and if 1 you get b and in between 0 and 1 you a=can get a random number.
// And to find a random between two numbers
// a + r (b - a)
// Math.ceil(0 + Math.random() * 255)
// Math.ceil(3.33)      =>  4
// Math.floor(3.33)     =>  3