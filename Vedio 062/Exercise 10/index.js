/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let random = Math.random();

const Adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

const Shop_Name = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

const Another_Word = {
    1: "Bros",
    2: "Limited",
    3: "Hub",
}

if (random < 0.1) {
    console.log("Congrats!,You got a super rare name:");

    function First_L() {
      return Adjectives[3];
    }

    function Second_L() {
        return Shop_Name[2];
    }
    
    function Third_L(){
        return Another_Word[2];
    }

    console.log(First_L()+" "+ Second_L()+" "+ Third_L());
}

else if (random > 0.1 && random < 0.4) {
    console.log("Congrats!,You got a rare name:");

     function First_L() {
      return Adjectives[2];
    }

    function Second_L() {
        return Shop_Name[1];
    }

    function Third_L(){
        return Another_Word[3];
    }

       console.log(First_L()+" "+ Second_L()+" "+ Third_L());
}

else if (random > 0.4 && random < 1) {
    console.log("Congrats!,You got a name:");

    function First_L() {
      return Adjectives[1];
    }

    function Second_L() {
        return Shop_Name[3];
    }

    function Third_L(){
        return Another_Word[1];
    }

       console.log(First_L()+" "+ Second_L()+" "+ Third_L());
}

else {
    console.log("Try again");
}