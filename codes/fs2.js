var fs = require('fs'); // built-in nodejs module

var content = "";

fs.readFile("hof1.html", (err, data) => {
    if(!err) {
        content = data.toString();
        console.log(content.toString());
    }
}); 

console.log("Bye!!!");
