const a= document.querySelector(".hello");
const b= document.querySelector(".btn");
b.addEventListener('click', () => {
    a.textContent = 'Text Changed!';
});