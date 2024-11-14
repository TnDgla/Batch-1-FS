const root = document.getElementById("root");
const add = document.querySelector(".btn");
const remove = document.querySelector(".remove");
const removeAll = document.querySelector(".removeAll");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

add.addEventListener("click", () => {
  if (input.value) {
    const li = document.createElement("li");
    li.innerText = input.value;
    li.style.color = "red";
    li.classList.add('li');
    list.appendChild(li);
    input.value = "";
  }
});

remove.addEventListener('click',()=>{
    const listItems= document.querySelectorAll('li');
    if(listItems.length!==0){
        listItems[0].remove();
    }
})

removeAll.addEventListener('click',()=>{
    list.innerHTML='';
})
