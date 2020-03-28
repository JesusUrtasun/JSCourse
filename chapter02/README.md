# Chapter 2

## Basic exercises for C++ programming.

### Jesús Urtasun Elizari - University of Milan - 2019/20

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

1. Open a new file `exercise2.js`, declare the variables in double precision (`double`) for the `base` and `height` of the rectangle.

2. Assign a `base` of `5.0` and a height of `2.0`.

3. Write the formule for the area and perimeter if the rectangle using C++ variables.

4. Write th result on screen using `cout`.

6. Run the code and check the output.

## Exercise 3 - Correct a program

Identify and correct the syntax errors  present in the next program,
also with the help of the output after copying
the content in a new file `exercise4.js`:

```c++
// Content of the file exercise4.js
#include <iostream>
#include <cmath>
using namespace std

int main() {

  const double angle = 9;
  const int a = 2, b = 3, sum = 0;  

  sum = a + b

  cout << "sin(9) = " <<sin(angle) << endl;
  cout << "sum = " << sum << "\n";

return   0;

}
```

## Exercise 5 - Input/output

Copy the file `exercise2.js` (area/perimeter rectangle) in a new file `exercise5.js` and add to the makefile the new program, i.e. `prog5`.

Modify the program in such a way that the variables correspong to the base and hieght are read from terminal. Use the command `cin`.

## Exercise 6 - Notation for cout

Copy file of the previous exercise in `exercise6.js` and add it to the makefile.

Print with `cout` the results of area and perimeter using 10 decimal digits, using the notation `fixed` and also `scientific`.

Print with `cout`, in any notation, the area and perimeter of the rectangle in the same row, separed by tabulation `\t`.

## Exercise 7 - Converting temperature

Write a program in JavaScript where is possible to convert a temperature from
Celsius to Kelvin using the equation:
```
T(Kelvin) = T(Celsius) + 273.15
```
where the user can introduce the temperature as input in Celsius using `cin`.

Verify the next conversions:
- 20 °C -> 293.15 K
- 30 °C -> 303.15 K
