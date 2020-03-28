////////////////////////////////////////////////////////////////////////////
// arrays
// new means constructor - constrcting an array
const numbers = new Array(1, 2, 3, 4, 5);
// create array the usual way
const fruits = ["apples", "oranges", "bananas"]
// can contain many differetn datatypes, gj js - lot of freedom
console.log(numbers);
console.log(fruits);

// acces one element
console.log(fruits[1]);
// notice add is allowed, the oly thing const makes is prefent fro REASIGNMENT - always use consts
fruits[3] = "grapes";
console.log(fruits);
// equivalent
fruits.push("mangos");
// add to de beggining
fruits.unshift("strawberries");
console.log(fruits);
fruits.pop();

console.log(Array.isArray(fruits));
console.log(Array.isArray("hello"));