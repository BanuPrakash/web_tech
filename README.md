# Web Technology


Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/web_tech

=========

Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ] 16.x.x

================================================================
HTML & CSS : Self-Study

JavaScript
* Scripting language
* Loosely typed language
* Dynamically typed

var x = "name"; // String
x.toUpperCase();

x = 32; // Number
x++;

x = true; // Boolean

====

JS needs JS engine for execution

JS engines:
* V8 ==> Google ==> Chrome / NodeJS
* SpiderMonkey ==> FireFox / Adobe Acrobat ==> tweak on SpiderMonkey
* Chakra ==> IE
* Nashorn ==> Oracle Products
* Continnum ==> Edge [ V8 ]

file.js
	
var g = 100;

function doTask() {
	var a = 10;
	if(g > a) {
		var b = 20;
		c= 30;
	}
	console.log(g, a, b, c);
}

doTask();

console.log(g, a, b, c);

==============================================

file.js

console.log("Hello!!!");

setInterval(function timed() {
	console.log("timed!!!")
}, 100);

$("#btn").click(function clicked() {
	console.log("clicked!!!");
});

function doTask() {
	 console.log("task!!!");
}

doTask();

Event loop:
while(isStackEmpty && queue.length > 0) {
	fn = queue.take()
	fn();
	wait();
}

class Interval extends Thread {
	Interval(callbackqueue queue, fn, time [100]) {
		..
	}

	run() {
		while(true) {
			sleep(100);
			queue.push(fn [ timed]);
		}
	}
}


================

function add(x, y) {
	return x + y;
}

console.log(add(4,5)); // 9

==============


function add(x, y) {
	return 
		x + y;
}

console.log(add(4,5)); // blank, 9 ==> output is undefined


return is a valid token ==> return;

function doTask() {

}

let x = doTask(); // x value is undefined

==========================


OOP with JS

Object contains state and behaviour; ==> C++ , C#, JAva we use class as a template to create Object

In JS we use function as template to create a object.

1) 
var obj = new Object();

obj.name = "Peter"; // state
obj.age = 24; // state , instance varible

obj.getName = function() {
	return this.name
}

console.log(obj.getName()); // Peter
console.log(obj.age); // 24















