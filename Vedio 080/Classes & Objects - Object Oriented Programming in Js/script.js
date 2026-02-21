// let obj = {
//     a: 1,
//     b: "Mobi"
// }

// console.log(obj);

// let animal = {
//     eats : true
// };

// let rabbit = {
//     jumps : true
// };

// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created...");
    }

    eats() {
        console.log("Kha raha hoon");
    }

    jumps() {
        console.log("kood rha hoon");
    }
}


class Lion extends Animal{
    constructor(name) {
        super(name);
        // this.name = name;
        console.log("Object is created and he is a lion...");
    }

    eats() {
        super.eats();
        console.log("Kha raha hoon roar");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("shera");
console.log(l);

// l instanceof Animal
// a instanceof Lion
// false
// Animal instanceof Lion
// false
// l instanceof Animal
// true
// l instanceof Lion