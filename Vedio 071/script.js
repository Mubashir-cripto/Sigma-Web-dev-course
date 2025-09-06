// document.querySelector(".box")

// document.querySelector(".box").innerHTML

// document.querySelector(".container").innerHTML

// document.querySelector(".box").innerHTML

// document.querySelector(".box").innerText

// document.querySelector(".container").innerText

// document.querySelector(".container").outerHTML

// document.querySelector(".container").tagName

// document.querySelector(".container").nodeName

// document.querySelector(".container").textContent

// // document.querySelector(".box").innerHTML = "Hey I am Mobi"

// document.querySelector(".box").hasAttribute("style")

// document.querySelector(".box").getAttribute("style")

// document.querySelector(".box").setAttribute("style" ,"display:inline")

// document.querySelector(".box").attributes

// document.querySelector(".box").removeAttribute("style")

// document.defaultView = "on"

// document.querySelector(".box").dataset

let div = document.createElement("div");
div.innerHTML = "I have been inserted by <b>mobi</b>"
div.setAttribute("class", "created");
document.querySelector(".container").append(div);
// document.querySelector(".container").before(div);

let cont =  document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin" ,"<b>I am under the water. Please help me here too much raining..... iuuuuuoooooooo</b>")


// document.querySelector(".box").remove()

// document.querySelector(".container").classList

// document.querySelector(".container").className 

document.querySelector(".container").classList.add("harry")
document.querySelector(".container").classList.remove("harry")
document.querySelector(".container").classList.remove("red")
document.querySelector(".container").classList.add("red")

document.querySelector(".container").classList.toggle("red")
// "toggle" means if open close it and if close then open it