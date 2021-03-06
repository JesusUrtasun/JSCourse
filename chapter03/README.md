# Chapter 3

## Data types input/output files, if and else.

### Jesús Urtasun Elizari - University of Milan - 2019/20

Before starting we suggest to create a folder for Chapter 3 where you can save all files that will be created for the exercise
```bash
cd ~/           # go the home directory
mkdir chapter03  # create the directory chapter03 in home
cd chapter03     # go inside chapter03
```

## Exercise 1 - Increasing / decreasing

Write a program in JavScript where:

1. Declare a variables of type string, number, boolean, null, undefinded.

2. Print them on screen using `console.log()`.

3. Check that the command `let z;` to declare a variable `z` is equivalent to `undefined`.

5. Print the result on the screen.

## Exercise 2 - Even and ood numbers

Write a program that takes an integer and determines if it is an even or an odd number.
To do it use the module operator and the conditional statements (`if`, `else`).

## Exercise 3 - string and char

Write a JavaScript program in which:

1. Your name, surname and enrollment number are asked from terminal. Use variables of type `string` for the name,
`string` for the surname and `int` for the enrollment number. Implement the interface in the following way:
```text
Name     :
Surname  :
Number   :
```

2. Print with `console.log()` a row with the following syntax:
```bash
<surname>, <name> is registered with number: <number>.
```

3. Use a templata string.

4. Split

## Exercise 4 - Output file

Modify the previous exercise in such a way that the final output comes written over a file called `result.dat`.

1. Create a copy of the previous exercise.
2. Implement with `fstream` the creation of an output file with the method `open()`,
followed by a success test with the method `good()`.
3. Write the content in screen and in the file.
4. Close the file with the method `close()`.

## Exercise 5 - Input file

Modify the previous exercise in such a way that the final output comes red from an input file called `myinput.dat`
with the following content:
```
<your name>
<your surname>
<your number>
```

1. Create a copy of the previous exercise.
2. Implement with `fstream` the oppening of the file `myinput.dat`.
3. Read the data from the file.
4. Close the file.
5. Print the result on screen and in the file `result.dat`.
