/*
    Exercise 3: Strings
    Author: Jesús Urtasun - 2020
*/

// Declare variables
const name = "Jesus";
const surname = "Urtasun";
const number = 12345;

// Print on screen
console.log(name + " " + surname + " is registered with number " + number);

// Use template strings
console.log(`${name} ${surname} is registered with number ${number}`);

// Split
let s = "word";
console.log(s.split(""));

// Take a string and create an array from it
const s2 = "technology, computers, words, more words"
array = console.log(s2.split(","));