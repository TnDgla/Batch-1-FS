const td = document.getElementsByTagName("td")

Array.from(td).forEach((e) => {
    e.addEventListener("click", function() {
        window.open(`profile.html?p=${e.className}`)
    })
});