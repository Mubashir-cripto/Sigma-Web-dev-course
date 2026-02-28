console.log(a1);


(async function man() { //IEEE Concept
    console.log(a1)
    // let a = await sleep();
    // console.log(a)
    // let b = await sleep();
    // console.log(b)


    // let [x, y, ...rest] = [1, 5, 7, 8, 9, 12, 43]; //destructuring concept
    // console.log(x, y, rest);

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let { a, b } = obj;
    console.log(a, b);


    let arr = [1, 2, 3];
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr)); //spread operator(open arr values)

    //  const f = "the" ,d = "no";
    //  const g = {f ,d};
    //  console.log(g);

    // ------------------------------------------------------------------------------------
    // hosting does not happen with let and const but only with var
    // var a1 = 6; //var a1 will go in the console but not the value and shall show undefined
    // ------------------------------------------------------------------------------------

})();
var a1 = 6;

const sleep = async () => {  //it cannot access right now bec it is const if it was let or var the err would,t occur
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000)
    })
};

const sum = async (a, b, c) => {
    return a + b + c;
}


