console.log("Mobi")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
})
// You can also use traditional for-loop
document.getElementsByTagName("div")

// Matches
let e = document.getElementsByTagName("div")
// e[4].matches("#redbox")

// closest
// e[3].closest("#redbox")
// e[3].closest(".container")
// e[3].closest("html")

// contains
document.querySelector(".container").contains(e[2])
document.querySelector("body").contains(document.querySelector(".container"))