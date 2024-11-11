// JavaScript code in script.js
const openForm = document.getElementById('openForm');
const closeForm = document.getElementById('closeForm');
const popupForm = document.getElementById('popupForm');

openForm.addEventListener('click', () => {
    popupForm.style.display = 'flex';
});
