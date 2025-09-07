console.log("JavaScript, Document Object Model (DOM), Practice Set & Quiz")

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

// Insertion Methods =>
// Quick Quiz: Try out all these methods with your own webpage
let div = document.createElement("div");
div.innerHTML = "Hey I am inserted by Mobi"
div.setAttribute("class" ,"NewlyCreated");
// document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").replaceWith(div);

// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("beforebegin" ,"I am inserted in adjacentHTML")
// cont.insertAdjacentHTML("afterbegin" ,"I am inserted in adjacentHTML")
// cont.insertAdjacentHTML("beforeend" ,"I am inserted in adjacentHTML")
// cont.insertAdjacentHTML("afterend" ,"I am inserted in adjacentHTML")

// let remv = document.getElementById("remv")
// remv.remove()

document.querySelector(".container").classList.add("class")
document.querySelector(".container").classList.add("Mobiclass")
document.querySelector(".container").classList.remove("Mobiclass" , "class")
document.querySelector(".container").classList.toggle("red")
