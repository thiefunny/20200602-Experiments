const mainEl = document.querySelector("main");
const bodyEl = document.querySelector("body");
const runEl = document.getElementById("run");

runEl.addEventListener("click", function() {
    mainEl.classList.toggle("center");
})

