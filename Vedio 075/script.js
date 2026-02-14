// JAVA Script is Asysn in Nature
console.log("Mubashir is a hacker");
console.log("Rohan is a hecker");

setTimeout(() => {
    console.log("I am inside settimeout");
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout2");
}, 0);

console.log("The End");

// CallBack

// const ty = () => {
//     console.log("Trying");
// }

// const fn = (ty) => {
//   console.log("Nothing");
//   ty();
// }

// const callBack = (arg ,fn) => {
//     console.log(arg);
//     fn();
// }

// const loadScript = (src, callBack) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = callBack("Harry" ,fn ,ty);
//     document.head.append(sc);
// }

// loadScript("sha512-4wORnZuPd4xHr6q7HAmR3xfVQtVe3J+VyUO++EsN7Wx5/bSKsGN7x88p1BvrOOShaCtCg5pFHi9Njh7TavECgw==", callBack);

const nothing = () => {
    console.log("Nothing to show");
}

const trdFunction = (thirdArg ,nothing) => {
    console.log(thirdArg);
    nothing();
}

const fn = (secondArg ,trdFunction) => {
    console.log(secondArg);
    trdFunction("Hey I am third function" ,nothing);
}

const callBack = (arg ,fn) => {
  console.log(arg);
  fn("Hey I am second function" ,trdFunction);
}

const loadScript = (src ,callBack) => {
let sc = document.createElement("script");
sc.src = src;
sc.onload = () => callBack("Hey I am first function" ,fn);
document.head.append(sc);
}

loadScript("https://www.youtube.com/watch?v=9JaDBYPmiJ0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=75&t=688s" ,callBack);

// CallBack Hell is made and the solution is Promise