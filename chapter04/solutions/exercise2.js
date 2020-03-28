
/////////////////////////////////
/// conditionals
const xx = "10";
const xxx = 10;
if(xx == 10) {
    console.log("x is 10");
}

// == is just value,
// === is also the datatype
if(xxx === 4) {
    console.log("x is 10 good");
}
else if (xxx > 10) {
    console.log("x is greater than 10")
}
else {
    console.log("x is less than 10")
}

// multiple conditions
const yy = 10;
if(xxx > 5 || y > 10) {
    console.log("x is more than 5 or y is ore than 10")
}

// exercise - trnary operator
// assign variables based on a condition(? - then, : else)
const a = 10;
//const color = x > 10 ? "red" : "blue";
const color = "green;"
console.log(color);

// switch - evaluate conditions
switch(color) {
    case "red":
        console.log("color is red");   
        break;
    case "blue":
        console.log("color is blue");   
        break;
    default:
        console.log("color is NOT red or blue")
}