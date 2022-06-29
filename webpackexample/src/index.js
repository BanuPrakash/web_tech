import "./style.css"
import Person from './Person'; // ES 6 module system
import {add, sub} from './compute'; 

console.log("Hello  Adobe!!!");

console.log(add(4,5));
console.log(sub(14,5));

let p1 = new Person("Kim", 33);
let p2 = new Person("Rita", 21);

console.log(p1.getName(), p1.getAge());
console.log(p2.getName(), p2.getAge());