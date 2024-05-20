//String to JSON Object
const jsonString = '{"name": "John", "age": 30, "city":"New York"}';
const jsonObject = JSON.parse(jsonString);      //Convert JSON string to object
console.log(jsonObject.name);       //Output: John
console.log("jsonString: " + typeof(jsonString));
console.log("jsonOject: " + typeof(jsonObject));

//JSON Object to String
const objectToConvert = { 
    name: "Alice",
    age: 25 
};
const jsonStringified = JSON.stringify(objectToConvert);        //Convert object to  JSON string
console.log(jsonStringified);       //Output: {"name": "Alice", "age":25};
console.log("objectToConvert: " + typeof(objectToConvert));
console.log("jsonStringfied: " + typeof(jsonStringified));