// function completion(result) {
//     console.log("Result: " + result);
//     console.log("Task Completed!!");
// }

// function add( a, b, completion) {
//     const result = a + b;
//     completion(result); //callback
// }

// add(298, 396, completion);

function add(a, b, print) {
    print(a+b);
}

add(199, 756, (result) =>{ console.log("Result: " + result); });