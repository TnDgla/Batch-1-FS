const add = document.getElementById('add')
const popup = document.getElementById('popup')
const form = document.getElementById('form')
const close = document.getElementById('close')
const submit = document.getElementById('submit')
const reset = document.getElementById('reset')
const body = document.getElementsByTagName('section')[0]

open = false
add.addEventListener('click', () => {
    if(!open) {
        popup.style.display = 'flex'
        open = true
    }
})

close.addEventListener('click', () => {
    popup.style.display = 'none'
    open = false
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let dur = document.getElementById('duration').value
    let desc = document.getElementById('description').value
    createCard(dur, desc)
    popup.style.display = 'none'
    open = false
})

function createCard(dur, desc) {
    const card = document.createElement('div')
    const time = document.createElement('div')
    const info = document.createElement('div')
    const btn = document.createElement('button')

    info.innerText = `Description : ${desc}`
    card.appendChild(info)

    time.innerText = `Duration : ${dur}`
    card.appendChild(time)
    
    
    btn.innerText = 'DELETE'
    card.appendChild(btn)
    btn.addEventListener('click', () => {
        card.style.display = 'none'
    })

    card.className = 'card'
    body.appendChild(card)
}

reset.addEventListener('click', () => {
    const cards = document.getElementsByClassName('card')
    Array.from(cards).forEach(element => {
        element.style.display = 'none'
    });
})