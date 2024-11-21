
const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const deleteAllButton = document.getElementById('delete-all');

function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', () => {
        taskItem.classList.toggle('completed');
    });

    const taskContent = document.createElement('span');
    taskContent.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => taskItem.remove());

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    newTaskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);

newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function deleteAllTasks() {
    taskList.innerHTML = ''; 
}

deleteAllButton.addEventListener('click', deleteAllTasks);