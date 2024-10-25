const addbutton=document.getElementById("add");
const del=document.getElementById("delete");
const root = document.getElementById("root")
const taskname = document.getElementById("name")
const taskdesc = document.getElementById("task")

function createnote(name,desc){
    if(name!="" && desc!=""){
        const newnote = document.createElement("div");
        newnote.innerText =`Name of Task = ${name} \nDescription of task = ${desc}`;

       newnote.classList.add("note")
       root.appendChild(newnote)
       console.log(newnote)
       console.log('child appended')
    }
    else{
        console.log("the field are empty fill them first")
    }
}


addbutton.addEventListener('click',()=>{
    createnote(taskname.value,taskdesc.value)
    taskname.value=''
    taskdesc.value=''
})
del.addEventListener('click',()=>{
    let notes=document.getElementsByClassName("note");
    notes=Array.from(notes);
    notes.forEach(element=>{
        element.parentNode.removeChild(element);
    })
});