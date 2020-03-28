console.log("Hello world 3");
console.error("this is an error");
console.warn("this is a warning");

// Var, let, const
// var is globally scope - not used anymore. let, const added in 2015
//const h = 30; -> eeror, assignment of a constant variable
let h = 30;
//h = 31;
console.log(h);
// always use const unless we know we are going to reassging
// example, score
let score1;
score2 = 2;

// strings, number, bool, null, undefined, symbols
const name = "John";
const age = 30;
// there is not float or decimal in js
const number = 3.4;
const isCool = true;
const x = null; // basicaly empty
const y = undefined;
let z; // same as undefined
console.log(name, age, number, isCool, x, y, z)

// concatenation
console.log("this is a full text");
console.log("concatenate" + "some words" + 30);

// good way - 2015  use template strings - as in python
console.log(`my name is ${name} and I am ${age}`);

const s = "hello worlf";
console.log(s.length); // add an exclamation and 
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));

console.log(s.split(""));

// take a string and create an array from it
const s2 = "technology, computers, words, more words"
array = console.log(s2.split(","));