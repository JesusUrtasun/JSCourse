# Chapter 2

### Jesús Urtasun Elizari - University of Milan - 2019/20

## Basic exercises for JavaScript programming.

Before starting we suggest to create a folder for Chapter 2 in which you can save 
all files that will be used for the exercises.

*Example:* `cd ~/; mkdir chapter02; cd chapter02;`

## Exercise 1 - Hello World in JavaScript

Write a program in JavaScript where the words "Hello World!" are shown in the screen.

1. Open a terminal and create a new file called `exercise1.js`, whith `gedit` or `code`
write a program in JavaScript that shows on the screen the sentence "Hello World!".

2. Run the program with:
```bash
node exercise1.js
```
and check the output.

## Exercise 2 - Compute area and pertimeter of a rectangle

Write a program in JavaScript that computes the area and perimeter of a rectangle.

1. Open a new file `exercise2.js`. Declare the variables `base` and `height` of the rectangle as either numbers or constant numbers.

2. Assign a `base` of `5.0` and a height of `2.0`.

3. Write the formule for the area and perimeter if the rectangle using C++ variables.

4. Write th result on screen using `console.log()`.

6. Run the code and check the output.

## Exercise 3 - Input/output

Copy the file `exercise2.js` (area/perimeter rectangle) in a new file `exercise3.js`.

Modify the program in such a way that the variables correspong to the base and hieght are read from terminal. Use the command `prompt`.

## Exercise 4 - Notation

Copy file of the previous exercise in `exercise4.js` and add it to the makefile.

Print with `console.log()` the results of area and perimeter using 10 decimal digits, using the notation `fixed` and also `scientific`.

Print with `console.log()`, in any notation, the area and perimeter of the rectangle in the same row, separed by tabulation `\t`.

## Exercise 7 - Converting temperature

Write a program in JavaScript where is possible to convert a temperature from
Celsius to Kelvin using the equation:
```
T(Kelvin) = T(Celsius) + 273.15
```
where the user can introduce the temperature as input in Celsius using `prompt`.

Verify the next conversions:
- 20 °C -> 293.15 K
- 30 °C -> 303.15 K
