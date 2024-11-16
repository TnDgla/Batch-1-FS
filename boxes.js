// Select elements
const openFormButton = document.querySelector('#openFormButton');
const closeFormButton = document.querySelector('#closeFormButton');
const toDoForm = document.querySelector('#toDoForm');
const addToDoForm = document.querySelector('#addToDoForm');
const toDoList = document.querySelector('#list');

// Show form when 'Add To-Do' button is clicked
openFormButton.addEventListener('click', () => {
    toDoForm.classList.remove('hidden');
});

// Hide form when 'Cancel' button is clicked
closeFormButton.addEventListener('click', () => {
    toDoForm.classList.add('hidden');
});

// Add a new to-do item
addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const date = document.querySelector('#date').value;
    const description = document.querySelector('#description').value;

    // Create to-do item
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('to-do-item');
    toDoItem.innerHTML = `
        <div>
            <strong>${title}</strong><br>
            <small>${date}</small><br>
            <p>${description}</p>
        </div>
        <button class="delete-button">Delete</button>
    `;

    // Append to the list
    toDoList.appendChild(toDoItem);

    // Clear form inputs
    addToDoForm.reset();
    toDoForm.classList.add('hidden'); // Hide the form

    // Delete functionality
    toDoItem.querySelector('.delete-button').addEventListener('click', () => {
        toDoList.removeChild(toDoItem);
    });
});
