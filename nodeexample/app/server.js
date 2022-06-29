var http = require('http'); // built-in
var url = require('url'); // built-in
var lodash = require('lodash'); // node_modules
var compute = require('./compute'); 

// http://localhost:1234/add?x=10&y=15
// http://localhost:1234/subtract?x=10&y=15
// /add and /sub ==> pathname
// ? ==> query

var server = http.createServer( (request, response) => {
    var pathname = url.parse(request.url).pathname; 
    var query = url.parse(request.url, true).query;
    if(pathname === '/add') {
        response.end(compute.add(parseInt(query["x"]), parseInt(query["y"])).toString());
    } else if(pathname === '/subtract') {
        response.end(compute.subtract(parseInt(query["x"]), parseInt(query["y"])).toString());
    } else {
        response.end("Random : " + lodash.random(1, 100).toString());
    }

});

server.listen(1234, () => console.log("server started!!!"));

