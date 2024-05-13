var prompt = require('prompt-sync')();

//console.log()
console.log("Hello World");

//var, let, const, string
var a = 9;
let b = 10, c = 4;
const ans = a + b + c;
console.log("Output: " + ans);
const whatIsThis = "group of characters";
console.log("String: " + whatIsThis);
console.log("typeof(): " + typeof(whatIsThis));

//array, if()else(), for()
const arr = ["One", 2, ["Three", 4, "V"]];
arr.push(NaN);
console.log("\nArray");
const length = arr.length;
if(length < 5) {
    for(let i = 0; i<length; i++) {
        console.log("arr["+i+"]: "+ arr[i]);
    }
}
else {
    console.log("Length is greater than 5.");
}

//object
const person = {
    name: "John Doe",
    age: 26,
    isStudent: false,
    hobbies: ["reading", "swimming", "painting"]
};
console.log(person);
console.log("Hobby No. 2: " + person.hobbies[1]);

//functions
const ages = [29, 11, 56, 16, 17, 43, 18];
const result = ages.filter(checkAge);
function checkAge(age) {
    return age>=18;
}
console.log("Ages greater than and equal to 18 in the Array: " + result);

//prompt
const age = prompt("Please enter your age: ");
if(age<24) {
    console.log("You get 40% Student Discount.");
}
else{
    console.log("You get 20% Discount.");
}