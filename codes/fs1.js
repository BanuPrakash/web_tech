var fs = require('fs'); // built-in nodejs module

var content = fs.readFileSync("hof1.html"); // blocking code

console.log(content.toString());