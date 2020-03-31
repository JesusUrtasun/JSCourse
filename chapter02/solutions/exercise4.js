/*
    Exercise 4: Notation
    Author: Jesús Urtasun - 2020
*/

// Declare the variables
let base;
let heigh;

// Assign values from keyboard
// base = readline();
// height = readline();
base = 2.0;
height = 3.0;

// Compute area and perimeter
let area = base * height;
let perimeter = 2 * (base + height);

// Print on screen in fixed notation
console.log("Area: " + area.toFixed(10));
console.log("Perimeter: " + perimeter.toFixed(10));

// Print on screen in scientific notation
console.log("Area: " + area.toExponential());
console.log("Perimeter: " + perimeter.toExponential());