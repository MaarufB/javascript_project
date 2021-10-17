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

console.log(todos)

// accessing specific object
console.log(todos[1].text)

// Convert it into json
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)