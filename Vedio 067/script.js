console.log("Hello world")
// document.body
// document.body.childNodes
// document.body.childNodes[1]
// document.body.childNodes[1].childNodes

// Note:-
// The space btw the body and container is called text node and if you don,t want text node between element that so just don,t give any space and you can access it using DOM and its parent child properties

let cont = document.body.childNodes[1]
cont.firstChild
cont.lastChild
cont.firstElementChild
cont.lastElementChild.style.color = "red"
cont.lastElementChild.style.backgroundColor = "green"
cont.lastElementChild.parentElement
document.body.firstElementChild
// document.body.Element
// It will get only Box1 ,Box2 etc(One line above)

document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children
document.body.firstElementChild.children[0]
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[3].nextElementSibling
document.body.firstElementChild.children[3].previousElementSibling

document.body.firstElementChild.children[3].previousSibling
// you will get text this time
document.body.firstElementChild.children[3].parentElement

Document.body.children
Document.body.children[1]
Document.body.children[1].rows