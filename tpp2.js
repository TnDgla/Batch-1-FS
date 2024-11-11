
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const addTaskForm = document.getElementById('addTaskForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dobInput = document.getElementById('dob');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

addTaskBtn.addEventListener('click', () => {
  addTaskForm.style.display = addTaskForm.style.display === 'none' ? 'block' : 'none';
  nameInput.value = '';
  emailInput.value = '';
  dobInput.value = '';
  taskInput.value = '';
});


deleteAllBtn.addEventListener('click', () => {
  todoList.innerHTML = '';
});


function addTask() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const dob = dobInput.value;
  const taskText = taskInput.value.trim();

  if (name && email && dob && taskText) {
   
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskDetails = document.createElement('div');
    taskDetails.innerHTML = `
      <strong>Name:</strong> ${name} <br>
      <strong>Email:</strong> ${email} <br>
      <strong>Date of Birth:</strong> ${dob} <br>
      <strong>Task:</strong> ${taskText}
    `;

  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(taskDiv);
    });

   
    taskDiv.appendChild(taskDetails);
    taskDiv.appendChild(deleteBtn);

  
    todoList.appendChild(taskDiv);

    
    addTaskForm.style.display = 'none';
    nameInput.value = '';
    emailInput.value = '';
    dobInput.value = '';
    taskInput.value = '';
  } else {
    alert('Please fill in all fields!');
  }
}
