let todoList = document.querySelector(".todoList")
let todoLen = document.getElementById("todoLen")
let db = localStorage;

let todos = JSON.parse(db.getItem("todos")) || []
let globalData = JSON.parse(db.getItem("globalData")) || {id: 1}

let updateTodoList = () => {
  let todos = JSON.parse(db.getItem("todos")) || [];
  let todoText = ""
  
  if (todos) {
    for (let todo of todos) {
      todoText += `
      <div class="todo">
        <h2>${todo.name}</h2>
        <h3>${todo.about}</h3>
        <button onclick='updateTodo(${todo.id})'>✏️</button>
        <button onclick='doneToDo(${todo.id})'>✅</button>
      </div>
      `
    }
  }
  todoList.innerHTML = todoText
  todoLen.textContent = `Todos: ${todos.length}`
}

let addToDo = () => {
  let name = prompt("ToDo Name: ")
  let about = prompt("About ToDo: ")
  let globalData = JSON.parse(db.getItem("globalData")) || {id: 1}
  let todos = JSON.parse(db.getItem("todos")) || []
  
  if (!name || !about) {return alert("None Error!")}
  let todo = {
    id: globalData.id,
    name: name,
    about: about
  }
  todos.push(todo)
  globalData = JSON.stringify({id: globalData.id + 1})
  todos = JSON.stringify(todos)
  
  db.setItem("todos", todos)
  db.setItem("globalData", globalData)
  updateTodoList()
}

let doneToDo = (todoId) => {
  let todos = JSON.parse(db.getItem("todos"))
  let userConfirm = confirm("Done?")
  
  if (userConfirm) {
    let newTodos = []
    for (let i of todos) {
      if (i.id != todoId) {
        newTodos.push(i)
      }
    }
    newTodos = JSON.stringify(newTodos)
    db.setItem("todos", newTodos)
  }
  updateTodoList()
}

let updateTodo = (todoId) => {
  let todos = JSON.parse(db.getItem("todos"))
  let newTodos = []
  let name = prompt("Todo Name: ")
  let about = prompt("About ToDo: ")
  
  let todo = {
    id: todoId,
    name: name,
    about: about
  }
  for (let i of todos) {
    if (i.id == todoId) {
      i = todo
    }
    newTodos.push(i)
  }
  newTodos = JSON.stringify(newTodos)
  db.setItem("todos", newTodos)
  updateTodoList()
}

updateTodoList()