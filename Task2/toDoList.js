const inpEl = document.querySelector('#title')
const btnEl = document.querySelector('#add-btn')
const listEl = document.querySelector('#list')


btnEl.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = inpEl.value;
    listEl.appendChild(li);
    inpEl.value = ""

    li.addEventListener('click', function () {
        li.remove()
    })
})