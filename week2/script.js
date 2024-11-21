const mybox = document.getElementById('catfactdiv')
const catfacturl = "https://catfact.ninja/fact"
const btn = document.getElementById('btn')

async function catfact(){
    const response = await fetch(catfacturl);
    const data = await response.json();
    console.log(data)
    mybox.innerText = data.fact
}

btn.addEventListener('click',()=>{
    console.log("btn clicked");
    catfact()
})