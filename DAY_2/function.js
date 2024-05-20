//Types for Writing functions
// function add(a, b) {
//     return a+b;
// }

// var add = function(a, b) {
//     return a+b;
// }

//Arrow Function
// var add = (a, b) => { return a+b; }
var add = (a, b) => a+b;

const result = add(70, 17);
console.log(result);
//console.log(add);

(function() {
    console.log("This functions runs without calling.");
})();