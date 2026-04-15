// import {a ,b ,d} from "./mymodule.js" //named export
// console.log(a ,b ,d)

// import mobi from "./mymodule.js" //default export
// console.log(mobi)

// const a = require("./mymodule2.js");
// console.log(a)

const a = require("./mymodule2.js");
console.log(a ,__dirname ,__filename)

// node.js wraps the module code in thisfunction
(function (exports ,require ,module , __filename, __dirname) {
    // module code actually lives here
})