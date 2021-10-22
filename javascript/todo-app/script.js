const form = document.getElementById("form"); // This is for our form using getElemetById #form
const input = document.getElementById("input");
const todoUL =  document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("myTodos"));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo){
    let todoText = input.value;

    if (todo){
        todoText = todo.text;
    }

    if (todoText){
        const todoEl = document.createElement("li");
        if (todo && todo.completed){
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
            console.log(JSON.stringify(todos))
            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) =>{
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todoUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS(){
    const todosEL = document.querySelectorAll("li");

    const myTodos = [];

    todosEL.forEach((todoEL) => {
        myTodos.push({
            text: todoEL.innerText,
            completed: todoEL.classList.contains("completed"),
        });
    });

    localStorage.setItem("myTodos", JSON.stringify(myTodos));
}