const mybox = document.getElementById("billisachdiv");
const catfacturl = "https://catfact.ninja/fact";
const btn = document.getElementById("btn");
// const punch = document.getElementById("punchline");

async function catfact()
{
    const response = await fetch(catfacturl);
    const data = await response.json();
    console.log(data);
    mybox.innerHTML = data.fact;
    // punch.innerHTML = data.punchline;


}

btn.addEventListener("click", ()=>{
    console.log("btn clicked"),
    catfact()
});