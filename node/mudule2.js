// es5
// var sayHello = function(name) {
//     console.log("hello i am " + name);
// }

// es6
let sayHello = (name) => {
    let word = `hello i am ${name}`
    console.log(word);
}

module.exports = sayHello;