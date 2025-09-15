let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events 

button.addEventListener("dblclick" ,()=>{
   alert("I was clicked. Yayy!")
   document.querySelector(".box").innerHTML = "<b>Yay you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu" ,()=>{
   alert("Don,t hack us by right click Please!")
})

document.addEventListener("keydown" ,(e)=>{  //e is event object
   console.log(e ,e.key ,e.keyCode)
})

