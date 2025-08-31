// Chapter 7- Practice Set

console.log("Hello World")

// Create a navbar and change the color of its first element to red.

// let nava = document.getElementsByClassName("red")
// console.log(nava)
// nava[0].style.color = "red"

// Create a table without tbody Now use "view раgе
// Source" button to check whether it has a
// tbody or not.

// Yes it has tbody

// Create an element with 3 children Now change
// the color of first and last element to green

// document.querySelectorAll(".child").forEach(e => {
//     e.style.color = "green"
// })

// Create a JavaScript code to change background of all <li> tags to cyan

// document.querySelectorAll("li").forEach(e => {
//     e.style.backgroundColor = "cyan";
// })

// Which of the following is used to look for the farthest ancestor that matches a given CSS selector
// (a) matches(b) Closest(c) contains(d) none of these

// (b) closest

let e = document.getElementsByTagName("div")
// closest
// e[3].closest("#redbox")
// e[3].closest(".container")
// e[3].closest("html")