// Select the input and list elements
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.onclick = () => toggleTaskCompletion(taskSpan);
    listItem.appendChild(taskSpan);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(listItem);
    listItem.appendChild(deleteBtn);

    // Add the list item to the list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = "";
  }
}

// Function to toggle completion of a task
function toggleTaskCompletion(task) {
  task.parentElement.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(task) {
  todoList.removeChild(task);
}
