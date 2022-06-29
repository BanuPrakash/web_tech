var fs = require('fs'); // built-in nodejs module

// good for OTT platform
var readStream = fs.createReadStream("hof1.html");

readStream.on("data", (chunk) => {
    console.log(chunk.toString()); // called n times 
});

readStream.on("error", (err) => {
    console.log("not able to stream");
});

readStream.on("end", () => {
    console.log("Streaming ends!!!");
});



console.log("Bye!!!");
