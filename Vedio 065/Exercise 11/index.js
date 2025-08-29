function factorial(number) {
    let array = [];
    for(let i = 1 ; i <= number ; i++){
       array.push(i);
    }
    const redu = (a ,b) => {
        return a * b;
    }
    return array.reduce(redu);
}
console.log("The final factorial is:" ,factorial(5));