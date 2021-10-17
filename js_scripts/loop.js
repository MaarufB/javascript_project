const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Taking online courses',
        isCompleted: false
    }
] 

// For loop
for(let i=0; i < 10; i++){
    console.log(i)
}

// while loop
let i = 0;
while( i < 10 ){
    console.log(`While loop number ${i}`)
    i++;
}

// loop trough an array

for(let i = 0; i < todos.length; i ++){
    console.log(todos[i])
}

// simple for loop
for( let todo of todos){
    console.log(`This is todos ${todo.text}`)
}

// foreach, map, filter

const todoText = todos.map(function(todo){
    return todo.text;
})

console.log(todoText )

// using filter
const todoCompeletd = todos.filter(function(todo){
    return todo.isCompleted === true;
})

console.log(todoCompeletd)

// combine filter and map
const todoCompeletdCombine = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompeletdCombine)