// alert (document.documentElement.parentNode);
// alert ( document.documentElement.parentElement);

// // Quick-Quiz
//  Print typeof document and typeof window in the console & see what it prints.
// console.log(typeof(document))
// console.log(typeof(window))
// both are object

// Chapter 7- Practice Set

// Create a navbar and change the color of its first element to red.
document.body.firstElementChild
let cont = document.body.firstElementChild
cont.firstElementChild.childNodes[1].style.color = "red"

// Create a table without tbody Now use "view раgе
// Source" button to check whether it has a
// tbody or not

// Yes it has tbody ,the browser automatcally inserts tbody even if i did,nt wrote it in the table 

// Create an element with 3 children. Now change
// the color of first and last element to green.
document.body.childNodes
document.body.childNodes[3]
let contain = document.body.childNodes[3]
contain.firstElementChild.style.color = "green"
contain.lastElementChild.style.color = "green"


// Next 2 Questions are in Vedio 068