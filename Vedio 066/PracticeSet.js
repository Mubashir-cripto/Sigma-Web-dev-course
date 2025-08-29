// Chapter 6 - Practice Set
// Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive

let input_age = prompt("Enter your age")
if(input_age >= 18){
    alert("You can drive")
}
else{
    alert("You cannot drive")
}

// In Q1 use confirm to ask the user if he wants to see the prompt again

function CheckDrivingAge() {
    let input_age = prompt("Enter your age")
    if (input_age >= 18) {
        alert("You can drive")
    }
    else {
        alert("You cannot drive")
    }
}

CheckDrivingAge()

let ask = confirm("Click OK to \"confirm\" to show the prompt")

if(ask === true){
    CheckDrivingAge()
}

// In the previous question, use Console.error to log the error if the age entered is negative

function CheckDrivingAge() {
    let input_age = Number(prompt("Enter your age"))

    if(input_age < 0){
        console.error("You have entered a negative number")
       return;
    }

    if (input_age >= 18 ) {
        alert("You can drive")
    }

    else {
        alert("You cannot drive")
    }
}

CheckDrivingAge()

let ask = confirm("Click OK to \"confirm\" to show the prompt")

if(ask === true){
    CheckDrivingAge()
}


// Write a program to change the url to google. com(Redirection) if user enters a number greater than 4

let number = Number(prompt("Enter a number"))
if (number > 4){
    location.href = "https://google.com"
}
if(number < 0){
    location.href = "https://codewithharry.com"
}

// Change the backeround of the page to yellow red or any other Color based on user input through prompt

function color(value) {
    if (value === "yellow") {
        document.body.style.backgroundColor = "yellow"
    }
    else if (value === "red") {
        document.body.style.backgroundColor = "red"
    }
    else if (value === "green") {
        document.body.style.backgroundColor = "green"
    }
    else {
        document.body.style.backgroundColor = "aqua"
    }
}

color(prompt("Enter a color name for the background"))