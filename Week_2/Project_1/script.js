const mybox=document.getElementById('catfactdiv')

const catfacturl="https://catfact.ninja/fact"

const btn=document.getElementById('btn')

async function catfact() {
    const responce =await fetch(catfacturl);
    const data=await responce.json();
    console.log(data);
    mybox.innerText=data.fact
}


btn.addEventListener('click',()=>{
    console.log("btn clicked");
    catfact()
})