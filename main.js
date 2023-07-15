const toggleBtn = document.getElementById("toggle");
const menuEl = document.getElementById("menu");

toggleBtn.addEventListener('click', () => {
    if (menuEl.classList.contains("hidden")) {
        menuEl.classList.remove("hidden")
    }
    else {
        console.log("added")
        menuEl.classList.add("hidden")
    }
})