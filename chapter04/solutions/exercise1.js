
// Advanced chapter - reorganize

// arrays of objects
const todos = [
    {
        id: 1,
        text: "take out trash",
        isComplete: true
    },
    {
        id: 2,
        text: "meeitingt with boss",
        isComplete: false
    },
    {
        id: 3,
        text: "dentist appt",
        isComplete: true
    }
]

console.log(todos);
// print the meeting with boss
console.log(todos[1].text);

//////////////////////
//loops
for(let i  = 0; i < 10; i++) {
    console.log(i);
    //console.log(`for loop number ${i}`)
}
console.log("while");
let i = 10;
while(i < 10) {
    console.log(`while loop number: ${i}`)
}
console.log("for 1");
//loop over arrays - form 0
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}

// form 1 - more readable - like python
console.log("for 2");
for (let todo of todos) {
    console.log(todo.text);
}

// form 3 - high order array methods
console.log("\nfor each")
todos.forEach(function(todo) {
    console.log(todo.text)
});

// form 3 - map - it returns an array
// return an array of just the text values
console.log("\nmap")
const todoText = todos.map(function(todo) {
    return todo.text
});
console.log(todoText)

// form 4 - filter
// return only the completed ones
console.log("\nfilter")
const todoCompleted = todos.filter(function(todo) {
    return todo.isComplete === true;
});
console.log(todoCompleted)
