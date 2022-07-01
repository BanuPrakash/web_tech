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

5) html-webpack-plugin

HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. 


<html>
<head>
</head>
<body>
		..
</body>
</html>
	
	html-webpack-plugin takes the bundle file [ dist/main.js] and includes this in index.html


<html>
<head>
		<script src="dist/main.gef32c#sd211.js"></script>
		<script src="dist/cart.gef32c#sd211.js"></script>
		<script src="dist/customer.gef32c#sd211.js"></script>
		<script src="dist/vendor.js"></script>
		<script src="dist/bundle.js"></script>
</head>
<body>
		..
</body>
</html>

Without hash ==> once page is loaded onto browser ==> main.js ==> cache by browser

With hash ==> "dist/main.gef32c#sd211.js"

"dist/main.424ff32c533.js"

npm i html-webpack-plugin webpack-dev-server -D


webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
  })],
};


src/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Webpack Example!!!</h1>
</body>
</html>


npm run dev

output: index.html

<script defer src="main.js"></script></head>
<body>
    <h1>Webpack Example!!!</h1>
</body>
</html>

===

webpack-dev-server

  "start": "webpack serve --mode development"

 npm start

 starts development server on port 8080 by default:

 --

 customization

 const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};


===============

npm i css-loader style-loader -D

The css-loader interprets @import and url() like import/require() and will resolve them.

index.js

import "./style.css"

console.log("Hello  Adobe!!!");


style-loader
The style loader takes CSS and actually inserts it into the page so that the styles are active on the page.

index.html
<style>
	body {
    background-color:cadetblue
}

h1 {
    color: bisque;
}
</style>


======================

Babel: ==> transpiler

npm i @babel/core babel-loader @babel/preset-env -D


@babel-core ==> babel transpiler

babel-loader ==> loads imported "js"




@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 
This both makes your life easier and JavaScript bundles smaller!



babel.config.json
{
    "presets": ["@babel/preset-env"]
}

webpack.config.js

{
        test: /\.js$/,
        use: ["babel-loader"],
        exclude:/node_modules/
}

======

export default class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

---

same as 

function Person(name, age) {
        this.name = name;
        this.age = age;
}

Person.prototype. getName = function() {
        return this.name;
 }

=================================

3rd party libraries

npm i lodash

 optimization: {
    splitChunks: {chunks: "all", name: "vendor"}
 },

 chunks: 'async',

product.bundle.js
customer.bundle.js /* lazy */
order.bundle.js /* lazy */


=================================

ESLint: for static code analysis


npm install eslint eslint-webpack-plugin -D


npm init @eslint/config
-> select appropriate options

creates .eslintrs.js where rules can be configured

 "eslint:recommended", ==> all default rules

  "eslint:airbnb",
  or
  "eslint:shopify",


 "lint": "eslint . --ext .js "

 npm run lint

 ==================================

 https://getbootstrap.com/

 Documentation:

 Grid system

 Button

 Navbar

 Card

 ==========================================================

 Day 3

 Recap: NodeJS, NPM, package.json

 Webpack ==> src, output folder

 webpack by default has concat; minify features
 webpack --mode production

 HtmlWebpackPlugin ==> bundles into html template
 css-loader ==> import './style.css'
 style-loader  <style></style>

 babel-loader ==> load .js/ /jsx files
 ts-loader ==> load .ts/ .tsx files

 @babel-core ==> babel transpiler

 @babel/preset-env ==> polyfills

 JS testing : Mocha, chai

 ----------------------------------------

 CSR ==> client side rendering
 SSR ==> server side rendering
 SSG ==> static site generation

 Rendering: data/state/representation of state ==> presentation [View : HTML / PDF/ IMAGE]


 AJAX
 new XmlHttpRequest()

 XMLHttpRequest (XHR) objects are used to interact with servers. 
 You can retrieve data from a URL without having to do a full page refresh. 
 This enables a Web page to update just part of a page without disrupting what the user is doing.

jQuery.getJSON()

---

SPA ==> Single Page Application  [ one html "index.html" and many views]

* Different URLS should show different views
http://amazon.com/mobiles
http://amazon.com/tvs
http://amazon.com/mobiles/iPhone
http://amazon.com/mobiles/Pixel
http://amazon.com/mobiles/iPhone/13
http://amazon.com/orders

On server:
mobiles.js ==> {json data of mobiles}
tvs.js ==> {json data of tvs}
orders.js
customers.js

http://amazon.com/mobiles
here only mobiles.js gets downloaded from server to client machine

http://amazon.com/orders
now "orders.js" gets download from server to client machine
* Lazy loading of modules
only when url used is "http://amazon.com/orders" ==> orders module has to loaded

* Dependecies between modules
* Data binding [ one-way binding and two-way-binding]

MVC ==> Model View Controller

Model represents the data and logic
View is presentation
Controller ==> Locus between Model and View

Model <---> Controller <--> View 

Libraries  and Frameworks:
* Backbone Library [MVC pattern] ==> gave support for Model and Controller; for views we have to use 3rd party library
* AngularJS Framework [ MVVP pattern based on MVC]; pretty have 
* React Library [ View library ] ==> faster compared to AngularJS
* Angular Framework [ MVVP pattern] ==> enhanced View rendering ==> zone.js
* React Library ==> improved rendering by using Fiber architecture [ Concurrent view updates]
	==> React scores over Angular when it comes Core web Vitals


SSG
A static site generator is a tool that generates a full static HTML website based on raw data and a set of templates. Essentially, a static site generator automates the task of coding individual HTML pages and gets those pages ready to serve to users ahead of time.

Next.js
Express.js


HTML generared every day / every 30 min [India today]

===============================================================

REACT version 18.2.0

codepen.io

HTML

<div id="root"></div>


Settings ==> Behaviour => turn off auto-update and auto-save

Settings ==> JS
1) JS Preprocessor ==> Babel
Babel includes JSX processing.
2) JS CDN libraries
https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js

Save & Close

=================================================

In react we have react node

What is React Node?
==> ReactElement, ReactFragment, string, array of nodes, null, undefined


let Welcome = React.createElement("h1", {style:{'color':'red'}}, "Welcome to React!!!");

console.log(Welcome)

ReactDOM.render(Welcome, document.getElementById("root"))

=========================================================================================



===================

Diffs algorithm

const diffs = [
	{
		newNode: { /*  1, tagName: li */},
		oldNode: { /* One, tagName: li */},
		index: 0
	},
	{
		newNode: { /* Four */},
		index: 3
	}

]

Reconcillation:

diffs.forEach( diff => {
	const newElement = document.createElement(diff.newNode.tagName); // <li>1</li>
	if(diff.oldNode) {
		document.getElementById(..).replaceChild(diff.newElement, diff.index)
	} else {
		document.getElementById(..).appendChild(diff.newElement)
	}
})

======================

<div>
	<h1> Welcome to React !!!</h1>
</div>


let Welcome = React.createElement("div",null, React.createElement("h1", {style:{'color':'red'}}, "Welcome to React!!!"));

* functional component
* class component


function Welcome(props) {
  return <div>
    <h1>{props.msg}</h1>
    <h3>Place: {props.place} </h3>
   </div>
}



ReactDOM.render(<Welcome msg="Welcome to Adobe!!!" place="Virtual Class"/>, document.getElementById("root"))

Data passed from parent to child ==> props

=================



function Welcome({msg, place}) {
  return <div>
    <h1>{msg}</h1>
    <h3>Place: {place} </h3>
   </div>
}


ReactDOM.render(<Welcome msg="Welcome to Adobe!!!" place="Virtual Class"/>, document.getElementById("root"))

========================

Thinking in React:
1) Mock data
2) Use Mockup to create a mock UI ==> UI team
3) think each and every small rectangle component coming up on the screen as react component [ it can exist on its own]


// Mock data in place of JSON from SpringBoot RESTful
```
var data = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

function ProductList({title, products}) {
  return <div>
        <h1>{title}</h1>
        {
          products.map( p => <ProductRow product={p} />)
       }
    </div>
 }

function ProductRow({product}) {
  return <div>
        Name : {product.name} <br />
        Price : {product.price} <br />
        <hr />
    </div>
}
ReactDOM.render(<ProductList title="Product List" products={data} />, document.getElementById("root"))
```

=======================================




customerapp> npm i cypress

=================================

* React.createElement
* Functional Component ==> Return value JSX is converted into React Element
* Class Component
	
	class Product extends React.Component {
		render() {

		}
	}

	render() returns JSX


===

```
function Welcome({msg, place}) {
  return <div>
    <h1>{msg}</h1>
    <h3>Place: {place} </h3>
   </div>
}



class Welcome extends React.Component {
  constructor(props) {
  	super(props);
  }
  render() {
  	let {msg, place} = this.props;
 	 return <div>
    		<h1>{msg}</h1>
    		<h3>Place: {place} </h3>
   		</div>
	}
}

 
<Welcome msg="Welcome to Adobe!!!" place="Virtual Class"/>
```


returned JSX should have a root element; can't return multiple values


Class Component can have state and behaviour
	Button --> Component
	Button has size, color, caption, .. -> state
	click(), mousemove(), ...

BankingAccount:
	balance ==> state
	credit() / debit() ==> behaviour


class ProductList extends React.Component {
	state = {
		products: [
			{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
			{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
			{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
			{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
			{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}]
	}

	addProduct(){

	}
	deleteProduct(id) {

	}
	searchProduct(name) {

	}

	render() {

	}
}

=======================================


npx create-react-app customerapp

creates a scaffolding code using webpack internally

npm i -g create-react-app
create-react-app customerapp

npm i -g mocha
mocha --reporter spec


npx ==> executable node module


  "react-scripts": "5.0.1",

  "start": "react-scripts start",

  npm start
  "react-scripts start" triggers "webpack serve --mode development"
   "build": "react-scripts build",
   "webpack --mode production"

import ReactDOM from 'react-dom/client'; // Fiber architecture
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
 );

 is same as
 import ReactDOM from 'react-dom'; // stack architecture
 ReactDOM.render(<App />, document.getElementById("root"))


=============


class SampleComponent extends React.Component {
	state = {
		x: 10,
		y: 15
	}
}

===

<React.Fragment> avoids unncessary <div>

function A() {
	return <div>
				<h1></h1>
				<p></p>
		</div>
}

function B() {
	return <div>
			<h3></h3>
			<h4></h4>
		</div>
}


function C() {
	return <React.Fragment>
			<h3></h3>
			<h4></h4>
		</React.Fragment>
}


Fragments
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

=================

App.js
CustomerList.js
CustomerRow.js

================
Each child in a list should have a unique "key" prop.

===================================================================
 <button type="button" onClick={this.deleteRow}>&times;</button> // context is lost
 
 Correct way of binding:
 a) <button type="button" onClick={() => this.deleteRow()}>&times;</button> // arrow function will use enclosing context

 b) <button type="button" onClick={this.deleteRow.bind(this)}>&times;</button>


 return <>

    </>


    same as

  return <React.Fragment>

    </React.Fragment>

 ============================================

 Unit testing React Components
 * Mocha
 * Jest
 * Jasmine

 ATB ==> Angular Test Bed is built on top of Jasmine
 RTL ===> react testing library is built on top of JEST

  "@testing-library/jest-dom": "^5.16.4",
  "@testing-library/react": "^13.3.0",

  RTL provides methods to access React Nodes

  * getBy
  * queryBy
  * findBy

  ==

 
getByRole: This can be used to query every element that is exposed in the accessibility tree. With the name option you can filter the returned elements by their accessible name. This should be your top preference for just about everything. There's not much you can't get with this (if you can't, it's possible your UI is inaccessible). Most often, this will be used with the name option like so: getByRole('button', {name: /submit/i}). Check the list of roles.

getByLabelText: This method is really good for form fields. When navigating through a website form, users find elements using label text. This method emulates that behavior, so it should be your top preference.

getByPlaceholderText: A placeholder is not a substitute for a label. But if that's all you have, then it's better than alternatives.

getByText: Outside of forms, text content is the main way users find elements. This method can be used to find 
non-interactive elements (like divs, spans, and paragraphs).

	getByDisplayValue: The current value of a form element can be useful when navigating a page with filled-in values.


=========================

E2E

* React Router DOM
* Styled-components
* Bootstrap
* Fontawesome
* React Context
* Lazy Loading

======================================

React
React Node can be created using
React.createElement() ==> VDOM [ JSON representation of element]
* functional Component
	returned JSX with one root element ==> Root element <div></div> or <React.Fragment></React.Fragment> or <></>
	{} for interpolation ==> inserting dynamic content in JSX

* class Component
	extends React.Component
	render() returns JSX
	constructor(props) {
		super(props); // this has to be first statement
		// init
	}

	state
	behaviour
---

Reconcillation happens on 
* first call of render() using react-dom; reactive-native; react-tv
* whenever props changes and state changes using setState();

Event handling in class component:

class Sample extends Component {

	doTask() {
		console.log(this); // refers to Sample
	}


	render() {
		return <button onClick={}>Click</button>
	}
}

Binding callback to event handler:
1) onClick={() => this.doTask()}
	arrow functions uses "this" from enclosing context

2) onClick={this.doTask} 
	here context is lost; "this" is undefined
	without "use strict" mode "this" would have refered to "window" ==> see day 1

3) onClick={this.doTask.bind(this)}
	Binding happens everytime when component is re-rendered; whenever state or props

4) Prefered way:
class Sample extends Component {
constructor(props) {
	this.doTask = this.doTask.bind(this);
}

onClick={this.doTask}

In this case "binding" happens only once when component is created

===

Unit testing:

RTL is built on top of JEST
getBy, findBy, queryBy

byRole; byPlaceHolderText, byText, byLabelText, ...

screen object contains above methods

RTL provides render() ==> creates in memory HTML for testing

screen.debug() prints the HTML generated 

RTL provides "fireEvent" using which we can trigger DOM events

fireEvent.click(elem);


Day 4:

App.test.js is more like integration testing and not unit testing

render(<App/>)
	this renders App,  CustomerList, Filter, CustomerRow(#n)


Unit testing 
* CustomerRow has to be tested in isolation

	render(<CustomerRow 
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={c} key={c.id} />)

    But CustomerRow depends on "delEvent = deleteCustomer" and "customer = c"

   Mock callback and mock customer

====

npm test -- --coverage --watchAll

npm test -- --coverate --collectCoverageFrom:["src/**/*.{js,jsx}"]



===================

Check:
CustomerRow.test.js

npm test
and 
npm test -- --coverage --watchAll

==========================================


npm i cypress -D


Cypress ==> end-to-end testing

selenium ==> e2e

Protractor ==> e2e



needs running application

"scripts": {
	 "e2e": "cypress open"
}


one terminal:
npm start

another terminal:
npm run e2e

==============================================

Developers ==> Unit testing, E2E

UAT ==> Test engineers

===================================================


npx create-react-app phoneapp

=========

1) Component Life Cycle methods

Mounting:
constructor() ==> initialize
	|
	|
	v
render()
	|
	|
	V
componentDidMount() ==> API calls

Avoid API calls in constructor(); ==> Issue FCP ==> first contentful paint ==> Core Web Vitals


constructor() ==> empty collection of 20 video instances which has "pic", "owner", "text"

render()

componentDidMount() ==> API call and updates the state; on state change  render()

FCP


Updating stage:

Whenever props or state changes Update phase 

shouldComponentUpdate() ==> return false;

shouldComponentUpdate() ==> return true; default ==> render() ==> componentDidUpdate()

componentDidUpdate() ==> Make API calls based on props or state change

================

componentWillUnmount() ==> log details ==> pop up Model dialog ==> Thank you ==> feedback

===================================================================

Whenever state or props change ==> component re-renders ==> which triggers entire children to render

Avoid re-render of components
```


class Child extends React.Component {
  render() {
    console.log("child re-renders");
    return <>
        Child: {this.props.name}
      </>
  }
}

class Parent extends React.Component {
  state = {
    count : 0,
    name: 'Smith'
  }
  increment() {
    this.setState({
      count : this.state.count + 1
    })
  }
  
  render() {
    console.log("Parent renders!!");
    return <>
        Name : {this.state.name} <br />
        Count: {this.state.count} <br />
      <button onClick={this.increment.bind(this)}>Click</button>
      <Child name={this.state.name} />
    </>
  }
}
ReactDOM.render(<Parent/>, document.getElementById("root"));
```

changes:
1) 
```


class Child extends React.Component {
 shouldComponentUpdate(nextProps, nextState) {
 	return false;
 } 
  render() {
    console.log("child re-renders");
    return <>
        Child: {this.props.name}
      </>
  }
}
```
Changes :
2)

```
class Child extends React.Component {
shouldComponentUpdate(nextProps, nextState) {
 	return this.props.name !== nextProps.name;
 } 

3)

class Child extends React.PureComponent {
   render() {
    console.log("child re-renders");
    return <>
        <br /> Child: {this.props.name}
      </>
  }
}

Go with Purecomponent if "props" are simple not complex

Parent has data = {
	"name" : "Larry",
	"address": {
		"street":
		"place" : {
			"karnataka": {
				"city": "BLORE"
			}
		}
	}
}

== will check value on primitive

== will check on objects references and not content


Doable:
class Child extends React.PureComponent {

	shouldComponentUpdate(nextProps, nextState) {
		super.shouldComponentUpdate(nextProps, nextState);
 		return my custom check;
 	} 
}

 
============================

Render Functional Components:

function Child(props) {
    console.log("child re-renders");
    return <>
        <br /> Child: {props.name}
      </>
}
 
==========================




Solution:

function Child(props) {
    console.log("child re-renders");
    return <>
        <br /> Child: {props.name}
      </>
}

let MemoChild = React.memo(Child); // HOC works similar to PureComponent

class Parent extends React.Component {
  state = {
    count : 0,
    name: 'Smith'
  }
  increment() {
    this.setState({
      count : this.state.count + 1
    })
  }
  
  render() {
    console.log("Parent renders!!");
    return <>
        Name : {this.state.name} <br />
        Count: {this.state.count} <br />
      <button onClick={this.increment.bind(this)}>Click</button>
      <MemoChild name={this.state.name} />
    </>
  }
}
ReactDOM.render(<Parent/>, document.getElementById("root"))

```

===

similar to shouldComponentUpdate()

function applyCheck(prevProps, nextProps) {
	// custom check
	return true / false;
}

let MemoChild = React.memo(Child, applyCheck);

===================================================================================

npx create-react-app phoneapp

phoneapp> npm i bootstrap react-router-dom styled-components
 

==========================================================================


Handling Form data in react

Using createRef()

```
class App extends React.Component {
  state = {
    username: "",
    password: ""
  }
   userRef = React.createRef();
   pwdRef = React.createRef(); 
  sendData() {
    this.setState({
      username: this.userRef.current.value,
      password: this.pwdRef.current.value
    }, () => console.log(this.state))
  }
  render() {
    return <>
        <form>
          Username <input type="text" name="username" ref={this.userRef}/> <br />
          Password <input type="password" name="password" ref={this.pwdRef}/> <br />
          <button type="button" onClick={() => this.sendData()}>Submit</button>
      </form>
     </>
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))

```



===============

Using onChange populate state variables:

```
class App extends React.Component {
  state = {
    username: "",
    password: ""
  }
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  sendData() {
   console.log(this.state);
  }
  
  handleChange(evt) {
    this.setState({
      ...this.state,
      [evt.target.name] : evt.target.value
    })
  }
  render() {
    return <>
        <form>
          Username <input type="text" name="username"  onChange={(evt) => this.handleChange(evt) }/> <br />
          Password <input type="password" name="password" onChange={(evt) => this.handleChange(evt) } /> <br />
          <button type="button" onClick={() => this.sendData()}>Submit</button>
      </form>
     </>
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))

```
