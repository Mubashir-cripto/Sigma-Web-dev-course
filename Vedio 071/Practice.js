console.log("JavaScript, Document Object Model (DOM) Practice Set")

// let cont_1 = document.querySelector(".container").children
// console.dir(Array.from(cont_1))
//  cont_1 = document.querySelector(".container").tagName
//  console.dir(cont_1)

// let cont_2 = document.querySelector(".container").innerHTML
// console.log(cont_2)

//cont_2 = document.querySelector(".box").innerHTML
//console.log(cont_2)

// let cont_3 = document.querySelector(".container").innerText
// console.log(cont_3)

// cont_3 = document.querySelector(".container").outerHTML
// console.log(cont_3)

// let cont_4 = document.querySelector(".box").hasAttribute("style")
// console.log(cont_4)

// cont_4 = document.querySelector(".box").getAttribute("style")
// console.log(cont_4)

// cont_4 = document.querySelector(".box").removeAttribute("style")
// console.log(cont_4)

// cont_4 = document.querySelector(".box").attributes
// console.log(cont_4)

//  document.querySelector(".box").dataSet
// console.log(cont_4)

let div = document.createElement("div");
div.innerHTML = "Hey I am inserted by Mobi"
div.setAttribute("class" ,"Newly_Created")
div.querySelector(".container").append(div)

