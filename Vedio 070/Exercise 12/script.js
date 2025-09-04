// Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
document.querySelectorAll(".box").forEach((e) => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    e.style.backgroundColor = `rgb(${r} ,${g} ,${b})`
})

document.querySelectorAll(".box").forEach((e) => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    e.style.color = `rgb(${r} ,${g} ,${b})`
})


/*
Problems :- It was to long and querySelectorAll was not too clear but had five different combinations but if known about the queryselectorAll would have improved and eased the work by a lot needed to learn again now known than wen query selector runs it runs on each box class (".box") seperately and by using some random functions and some css rgb you can make it work  so good it just then looks like a WoW

let rand = Math.random() * 10
document.querySelectorAll(".box1").forEach(e => {
    if (rand < 2) {
        e.style.backgroundColor = "green"
    }
    else if (rand >= 2 && rand < 4) {
        e.style.backgroundColor = "purple"
    }
    else if (rand >= 4 && rand < 6) {
        e.style.backgroundColor = "yellow"
    }
    else if (rand >= 6 && rand < 8) {
        e.style.backgroundColor = "aqua"
    }
    else {
        e.style.backgroundColor = "red"
    }
})

let rand2 = Math.random() * 10
document.querySelectorAll(".box2").forEach(e => {
    if (rand2 < 2) {
        e.style.backgroundColor = "green"
    }
    else if (rand2 >= 2 && rand2 < 4) {
        e.style.backgroundColor = "purple"
    }
    else if (rand2 >= 4 && rand2 < 6) {
        e.style.backgroundColor = "yellow"
    }
    else if (rand2 >= 6 && rand2 < 8) {
        e.style.backgroundColor = "aqua"
    }
    else {
        e.style.backgroundColor = "red"
    }
})

let rand3 = Math.random() * 10
document.querySelectorAll(".box3").forEach(e => {
    if (rand3 < 2) {
        e.style.backgroundColor = "green"
    }
    else if (rand3 >= 2 && rand3 < 4) {
        e.style.backgroundColor = "purple"
    }
    else if (rand3 >= 4 && rand3 < 6) {
        e.style.backgroundColor = "yellow"
    }
    else if (rand3 >= 6 && rand3 < 8) {
        e.style.backgroundColor = "aqua"
    }
    else {
        e.style.backgroundColor = "red"
    }
})

let rand4 = Math.random() * 10
document.querySelectorAll(".box4").forEach(e => {
    if (rand4 < 2) {
        e.style.backgroundColor = "green"
    }
    else if (rand4 >= 2 && rand4 < 4) {
        e.style.backgroundColor = "purple"
    }
    else if (rand4 >= 4 && rand4 < 6) {
        e.style.backgroundColor = "yellow"
    }
    else if (rand4 >= 6 && rand4 < 8) {
        e.style.backgroundColor = "aqua"
    }
    else {
        e.style.backgroundColor = "red"
    }
})

let rand5 = Math.random() * 10
document.querySelectorAll(".box5").forEach(e => {
    if (rand5 < 2) {
        e.style.backgroundColor = "green"
    }
    else if (rand5 >= 2 && rand5 < 4) {
        e.style.backgroundColor = "purple"
    }
    else if (rand5 >= 4 && rand5 < 6) {
        e.style.backgroundColor = "yellow"
    }
    else if (rand5 >= 6 && rand5 < 8) {
        e.style.backgroundColor = "aqua"
    }
    else {
        e.style.backgroundColor = "red"
    }
})

// --------------------------------------------------------

let rand6 = Math.random() * 10
document.querySelectorAll(".box1").forEach(e => {
    if (rand6 < 2) {
        e.style.color = "black"
    }
    else if (rand6 >= 2 && rand6 < 4) {
        e.style.color = "green"
    }
    else if (rand6 >= 4 && rand6 < 6) {
        e.style.color = "purple"
    }
    else if (rand6 >= 6 && rand6 < 8) {
        e.style.color = "red"
    }
    else {
        e.style.color = "darkgreen"
    }
})

let rand7 = Math.random() * 10
document.querySelectorAll(".box2").forEach(e => {
    if (rand7 < 2) {
        e.style.color = "black"
    }
    else if (rand7 >= 2 && rand7 < 4) {
        e.style.color = "green"
    }
    else if (rand7 >= 4 && rand7 < 6) {
        e.style.color = "purple"
    }
    else if (rand7 >= 6 && rand7 < 8) {
        e.style.color = "red"
    }
    else {
        e.style.color = "darkgreen"
    }
})
let rand8 = Math.random() * 10
document.querySelectorAll(".box3").forEach(e => {
    if (rand8 < 2) {
        e.style.color = "black"
    }
    else if (rand8 >= 2 && rand8 < 4) {
        e.style.color = "green"
    }
    else if (rand8 >= 4 && rand8 < 6) {
        e.style.color = "purple"
    }
    else if (rand8 >= 6 && rand8 < 8) {
        e.style.color = "red"
    }
    else {
        e.style.color = "darkgreen"
    }
})
let rand9 = Math.random() * 10
document.querySelectorAll(".box4").forEach(e => {
    if (rand9 < 2) {
        e.style.color = "black"
    }
    else if (rand9 >= 2 && rand9 < 4) {
        e.style.color = "green"
    }
    else if (rand9 >= 4 && rand9 < 6) {
        e.style.color = "purple"
    }
    else if (rand9 >= 6 && rand9 < 8) {
        e.style.color = "red"
    }
    else {
        e.style.color = "darkgreen"
    }
})
let rand10 = Math.random() * 10
document.querySelectorAll(".box5").forEach(e => {
    if (rand10 < 2) {
        e.style.color = "black"
    }
    else if (rand10 >= 2 && rand10 < 4) {
        e.style.color = "green"
    }
    else if (rand10 >= 4 && rand10 < 6) {
        e.style.color = "purple"
    }
    else if (rand10 >= 6 && rand10 < 8) {
        e.style.color = "red"
    }
    else {
        e.style.color = "darkgreen"
    }
 })

*/