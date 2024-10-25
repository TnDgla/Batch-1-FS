document.getElementById('fetchCatFact').addEventListener('click', fetchCatFact);

function fetchCatFact() {
    fetch('https://api.api-ninjas.com/v1/commodityprice?name=platinum')
        .then(response => response.json())
        .then(data => {
            const fact = data.fact;
            document.getElementById('factDisplay').innerHTML = <p>${fact}</p>;
        })
        .catch(error => {
            document.getElementById('factDisplay').innerHTML = <p>Error: ${error.message}</p>;
        });
}