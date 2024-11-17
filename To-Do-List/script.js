document.addEventListener("DOMContentLoaded", () => {
    const toggleFormButton = document.getElementById("toggleFormButton");
    const deleteAllButton = document.getElementById("deleteAllButton"); // New Delete All button
    const todoFormContainer = document.getElementById("todoFormContainer");
    const todoForm = document.getElementById("todoForm");
    const todoList = document.getElementById("todoList");
    const submitButton = document.getElementById("submitButton");
  
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let isEditing = false;
    let editingIndex = null;
  
    toggleFormButton.addEventListener("click", () => {
      todoFormContainer.classList.toggle("hidden");
      todoForm.reset();
      isEditing = false;
      editingIndex = null;
      submitButton.textContent = "Add Task";
    });
  
    deleteAllButton.addEventListener("click", () => {
      todos = [];
      localStorage.setItem("todos", JSON.stringify(todos)); // Update local storage
      renderTodos(); // Refresh the task list
    });
  
    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const task = document.getElementById("task").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
  
      if (isEditing) {
        todos[editingIndex] = { task, date, time };
        isEditing = false;
        submitButton.textContent = "Add Task";
      } else {
        todos.push({ task, date, time });
      }
  
      localStorage.setItem("todos", JSON.stringify(todos)); // Save updated todos to local storage
      renderTodos();
      todoForm.reset();
      todoFormContainer.classList.add("hidden");
    });
  
    function renderTodos() {
      todoList.innerHTML = "";
      todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";
  
        li.innerHTML = `
          <span>${todo.task} - ${todo.date} ${todo.time}</span>
          <div>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
          </div>
        `;
        todoList.appendChild(li);
      });
    }
  
    window.editTask = function(index) {
      const todo = todos[index];
      document.getElementById("task").value = todo.task;
      document.getElementById("date").value = todo.date;
      document.getElementById("time").value = todo.time;
  
      isEditing = true;
      editingIndex = index;
      submitButton.textContent = "Update Task";
      todoFormContainer.classList.remove("hidden");
    };
  
    window.deleteTask = function(index) {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos)); // Update local storage
      renderTodos();
    };
  
    // Initial render of stored todos
    renderTodos();
  });
  