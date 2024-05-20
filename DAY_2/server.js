const importToServer = require('./exportToServer');
var _ = require('lodash');

//OS, FS node documentary
var fs = require('fs');
var os = require('os');

const user = os.userInfo();
console.log(user);

const filePath =  '/home/aryan/coding/webDevelopment/NodeJS_Beginner/DAY_2/';
const fileName = 'sample.txt';
const message = "Hi, "+user.username+"!"+'\n';
fs.appendFile( filePath+fileName, message, () => {
    console.log("Appending or Creating New File, Named: " + fileName + ", at: " + filePath);
});

//export module
var age = importToServer.age;
console.log("Age: " + age);
const result = importToServer.addNumber(20, age);
console.log("Result: " + result);

//lodash
var data = ["person", "person", 1, 2, 1, 2, 3, 3, 3, "name", "person", "age"];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString(filter[1]));