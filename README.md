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


2) function constructor

function Product(name, price) {
	this.name = name;
	this.price = price;
}

Product("x", 100); // this refers to window

let p1 = new Product("iPhone", 89000.00);
let p2 = new Product("Sony", 189000.00);

Adding behaviour:

2.1) Object owned instance methods

function Product(name, price) {
	this.name = name;
	this.price = price;

	this.getName = function() {
		return this.name;
	}
}

let p1 = new Product("iPhone", 89000.00); // gets seperate copy of getName
let p2 = new Product("Sony", 189000.00); // gets seperate copy of getName
p1.getName();
p2.getName();

2.2) class owned instance methods


function Product(name, price) {
	this.name = name;
	this.price = price;
}

Product.prototype.getName = function() {
		return this.name;
};


let p1 = new Product("iPhone", 89000.00); 
let p2 = new Product("Sony", 189000.00);  
p1.getName();
p2.getName();

=============

3) using JSON ==> JavaScript Object Notation

{} refers object

var obj = {}; // object

obj.name = "Peter"; // state
obj.age = 24; // state , instance varible

obj.getName = function() {
	return this.name
}


---
// Singleton object
var obj = {
	"name": "James",
	"age": 24,
	"getName" : function () {
		return this.name;
	}
}

JSON key is string;
value can be string, number, undefined, null, array, object, function


var ref = obj.getName; // reference to function; context is lost; copies "window" as "this"

ref(); // this.name ==> window.name ==> ''

Solution:

var nref = obj.getName.bind(obj);

nref(); // James

---


Every function is an instance of Function

function add(x,y) {
	return x + y;
}


var add = new Function("x", "y" , "return x + y")
 
===============================================================


High Order Functions
* functions which accept function as argument
* functions which return a function

--> treat function as first-class member



var data = [5,2,55,10,7,12];

for(i = 0; i < data.length; i++) {
	console.log(data[i]);
}

for(i = 0; i < data.length; i++) {
	alert(data[i]);
}


Task--> write filter() in lib.js

1) get even numbers from an array of numerical type
2) from product json get only mobiles


* forEach ==> traverse and perform action on each element
* filter ==> subset based on predicate
* map ==> transform data
* reduce ==> aggregate =-> sum(), avg(), count(), max(), ...

https://rxmarbles.com/

    <script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja

====================

HOF: 2) functions which return a function

function add(x, y) {
	return x + y;
}


HOF:

function add(base) {
	return function(value) {
		return base + value;
	}
}

var fiveAdder = add(5);

var threeAdder = add(3);

fiveAdder(3); // 8
fiveAdder(2); // 7

threeAdder(2); // 5 ==> base + value ==> 3 + 2

=================================================

 <script>
        function fibanocci(no) {
            return (no == 0 || no == 1) ? no : fibanocci(no - 1) + fibanocci(no -2)
        }

        console.time("first")
            console.log(fibanocci(34));
        console.timeEnd("first");
        console.time("second")
            console.log(fibanocci(34));
        console.timeEnd("second");
    </script>

 Memoization:
 In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

 JS
 getProduct(4);

--> Server Restful API --> Spring Boot --> MySQL --> returned result ==> JSON ==> send JSON

 getProduct(2);

--> Server Restful API --> Spring Boot --> MySQL --> returned result ==> JSON ==> send JSON

 getProduct(4); ==> get from cache


--> Server Restful API --> Spring Boot --> MySQL --> returned result ==> JSON ==> send JSON




console.log(fibanocci(34)); ==> compute and store result in cache

console.log(fibanocci(34)); ==> get from cache

======================================

ES 6 / ECMAScript 2015

Transcompiler / Transpiler / Pre-Processor

* Babel

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

* Tracuer

===

TypeScript
* statically typed feature for JS

var x:string = "Hello";

var age:number = 24;

* tsc ==> typescript compiler

* LiveScript
* Dart
* CoffeeScript

JS engine needs plain vanilla JS

https://caniuse.com/

ES 6 features:

1) Arrow function

let add = (x, y) => x + y;

2) block level scope
	let
	const
	
var g = 100;
const PI = 3.14159

function doTask() {
	var a = 10;
	if(g > a) {
		let b = 20; // not hoisted to function scope; block scope ==> uses Module system to control visiblity
		c = 30;
	}
	console.log(g, a, b, c); // b is not visible
}

doTask();

console.log(g, c);

3) template string literal [tick]

var name = "Harry"; 

var place ='Bengaluru';

Template String literal: ``


var msg = `
	<div>
		<h1> ${name}</h1>
		<p> Place : ${place} </p>
</div>
`

msg  ="<div><h1>" + name + "</h1> <p>" + place + "</p></div>"

4) Destructuring

4.1) object

var product = {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"};

ES 5 way:
console.log(product.name); // use context to access member
console.log(product.price);


ES 6:

let {name, price} = product; // from product extract name and price into local var

console.log(name);
console.log(price);


4.2) array

var elems = [5,10,15,2,8,18];

var [first, second, ...others] = elems;

// first 5
// others [15, 2, 8, 18]

same as:
var first = elems[0];
var second = elems[1];

5) Clone

var elems = [5,10,15,2,8,18];

var ref = elems; // pointer
ref[0] = 99;

elems[0] becomes 99;

var cpy = [...elems]; // clone


var product = {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"};


var product_cpy = {...product}; // clone

6) Promise API

Synchronous method:

function getProduct(id) {

}


let result = getProduct(5); // blocked
console.log(result); 

Asynchronous

function getProduct(id) {
	return new Promise( (resolve, reject) => {
		// make api call to server
		// based on status code from server
		resolve(data); // or reject(err);
	});
}

getProducts(4).then(
	(data) => console.log(data), // resolve code
	(err) => console.log(err)
)

console.log("Bye!!!");

=================

Callback queue is of 2 type:
MicroQueue ==> Promise API
MacroQueue ==> timer

When stack is empty it takes all functions from microqueue and executes on stack one by one. once empty it takes
functions from macroqueue

Try https://www.jsv9000.app/
```
console.log("Hi!");
function one() {
            return new Promise( (resolve, reject) => {
                 resolve("p1")
            });
}

one().then(d => console.log(d));

setTimeout(function timeout() {
    console.log("t1");
}, 0);

setTimeout(function timeout() {
    console.log("t2");
}, 0);

function two() {
  return new Promise( (resolve, reject) => {
                 resolve("p2")
            });
}

two().then(d => console.log(d));
console.log("Welcome to loupe.");

```

 
7) async and await
	==> syntactical sugar over Promise API

	Promise API leads to callback hell.

	connectToServer(connection => {
		getProjects(connection => {
				getEmployees( (proj) => {
					getDetails( (emp) => {

					});
				});
			})
	});

	fetch("https://jsonplaceholder.typicode.com/users/1")
	.then(response => response.json())
	.then(data =>console.log(data))


 using async and await:



8) class ==> Babel
9) ES 6 modules ==> Babel
10) Generators

are functions which return series of output of different data types

function* dataGenerator() {
	console.log("task 1");
	console.log("task 2");
	yield "data";
	console.log("task 3");
	console.log("task 4");
	console.log("task 5");
	yield 100;
	console.log("task 6");
	yield true;
	console.log("task 7");
	yield {"id": 1, "name": "Kim"};
}


"yield" to return a value

var ref = dataGenerator();

ref.next();
ref.next();

SAGA Pattern ==> Redux SAGA

========================================================

<html>
	<body>
		<div>
				Hello
		</div>
		<p class="test"></p>
		<p class="test"></p>
		<button id="btn">Ok</button>
	</body>
</html>

DOM ==> Document Object Model

HTML or XML in the form of tree of  Object [ DOM ] ==> JS or VB

DOM:
* access elements
1) document.getElementById("btn")

2) document.getElementByTagName("p");

3) document.querySelector("#btn"); // button with id=btn
document.querySelectorAll(".test"); // all elements which has class = "test"
document.querySelectorAll("p"); // all paragraph elements

* allows creation / changes / delete

   const newDiv = document.createElement("div");  // <div>

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  <div>
  		Hi there and greetings!
  </div>

* add event listeners to DOM [ https://www.w3schools.com/jsref/dom_obj_event.asp ]
	DHTML

=====================

Day 2


Recap:
JS, HOF, closure [ memoize pattern] React.memo()
ES 6 features
DOM 

==============


Node.js
 ==> platform with JS V8 engine and libuv cross-platform c/c++ libraries

 libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops

 * libuv provides Thread pools for Nonblocking I/O
 * libuv provides Async handlers for Socket connection

 Why NodeJS?

 * Traditional Web application ==> SSR [ like PHP / Servlet & JSP / ASP.NET ]
 * To build RESTful Web services [ Spring Boot / C# MVC, Razor ]
 * Real time applicaitons [ ChatBot]
 * Streaming API [ OTT ==> Netflix / HotStar / Prime ]
 * Building client side application

 Why NodeJS for client side application?

 * SPA ==> Single Page application [ lots of modules are executed in client machine]
 * many JS files with dependencies ==> 30 - 40 js files

 <script src="customer.js"></script>
 <script src="driver.js"></script>
 <script src="trip.js"></script>
 <script src="payment.js"></script>


Each script tag is a network call

* we need to bundle them

<script src="bundle.js"></script>

* testing
* Linting ==> static code analysis
* transpile [ ES 6 / TypeScript / DART / CoffeeScript] ==> js
* minify [ remove whitespace]
* uglify [ big names ==> shorter names]
* bundle

========================
 
NodeJS comes with many pre-defined modules like fs, http, crypto, clusterm. repl ,...

NodeJS uses by default CommonJS module system

Module system
1) IIFE ==> Plain Vanilla Module System [ Immediate Invoke Function Expression]

var ShopModule = (function() { 
	var data = [];
	function addToCart(elem) { data.push(elem);}
	function getData() { return data; }
	function someTask() { }
	return {
			addToCart: addToCart,
			getData: getData
	}
})();


ShopModule.addToCart({...});

ShopModule.getData();

ShopModule.someTask() ; // error --> not accessable
ShopModule.data; // it's private to modules; --> not accessable

var ProductModule  = (function() {
	var data = [{"id": 1, "name" : "a"}, {"id": 1, "name" : "a"}];
	function getData() {
		return data;
	}
	return {
		getData: getData
	}
})();

ProductModule.getData();


2) CommonJS module system [ one file one module ; all members in file are private to module]

compute.js

module.exports.add = function(x, y) {

}

module.exports.subtract = function(x, y) {

}
 // private to module
function multiple(x,y) {

}


other.js

var compute = require('./compute'); // importing a module

console.log(compute.add(4,5));
console.log(compute.multiply(4,5)); // error


3) ES 6 module

Product.js

export class Product {

}

function doTask() {

}

Other.js

import {Product} from './Product';


4) AMD
5) UMD
6) System

==============

fs1.js
var fs = require('fs'); // built-in nodejs module

var content = fs.readFileSync("hof1.html");

console.log(content.toString());

--
terminal

node fs1.js

=========================================

Package Managers available for NodeJS:

1) NPM
2) YARN
3) PNPM
4) Rush

<script
  src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"
  integrity="sha256-6XMVI0zB8cRzfZjqKcD01PBsAy3FlDASrlC8SxCpInY="
  crossorigin="anonymous"></script>


<script src="lib/jquery-ui.js"></script>


* manage dependencies
	react, angular, lodash, jquery ==> 3rd party libraries

	transitive dependencies

	a1.5.js ==> b4.2.js ==> c9.1.js

	npm install react@18.6.0
	yarn add react@18.6.0

	downloads into "node_modules" folder [ every project has node_modules folder]

* publish
	npm publish

* Run scripts
	npm start
	npm test
	npm run build
	npm run lint

==================

First NodeJS project

initialize a node project:

folder> npm init --y

creates package.json
file where "dependecies", "devlopment dependencies", "scripts" are configured

Development dependeincies:
* Testing modules
* Linting ==> static code analysis
* Transcompiler ==> Babel, TSC,
* Bundle tools

--

npm i lodash

"dependencies": {
    "lodash": "^4.17.21"
}

lodash is doenloaded into "node_modules" folder

 "lodash": "4.17.21" ==> exact version 4.17.21
  "lodash": "^4.17.21" ==> any version equal or greater than 4.17.21 to be downloaded

   "lodash": "~4.17.21" ==> major version has to be "4"; minor and patch can change [ example: 4.21.11 is valid]


Other team members:

folder> npm install

Development Dependecy [ -D ]

folder> npm i mocha chai request -D


 "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0",
    "request": "^2.88.2"
  }

--

"scripts": {
    "test": "mocha --reporter spec"
  }


===

>node app/server.js


=================

JavaScript Unit Testing Libraries:

* Mocha
* Jasmine ==> By default Angular scaffolding code uses this
* Jest ==> By default React scaffolding code uses this


Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.


AAA ==> Assemble Action Assert

describe("test suite name", () => {

	// test spec
	it("first test", () => {
		perform action
		assert return value
	});


	// test spec
	it("first test", () => {
		perform action
		assert return value
	});
})

===

$ npm test

====================

Browser "fetch" to make http request

request

const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


======================================================================

Jasmine:

expect(x).toEqual('a');

Jest:

expect(x).toBe('a');


Chai:
 expect(x).to.be.equal('a'); 

==========================================

JavaScript build tools

* Grunt
* Gulp
* Webpack

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting and bundling.



Grunt and Gulp good for server side JS can be used for building client side web applicaiton also
Webpack ==> build tool specifically meant for client side web application [ react / backbone/ Angular ]

===============

1) webpackexample>npm init --y

2) npm i webpack webpack-cli -D

3) src/index.js

4)  "scripts": {
    "dev":  "webpack --mode development",
    "prod":  "webpack --mode production"
  }

$ npm run dev
	creates
		dist/main.js

		this main.js is the one loaded onto browser; this contains source-map to code in "src" folder

$ npm run prod
	creates
		dist/main.js

		this file is without source-map

		
	
























