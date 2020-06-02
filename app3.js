const barEl = document.querySelector(".bar");

barEl.addEventListener("mouseover", function() {
    barEl.classList.toggle("shift");
    barEl.classList.toggle("colorchange");
})

