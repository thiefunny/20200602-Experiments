const mainEl = document.querySelector("main");
const bodyEl = document.querySelector("body");
const runEl = document.getElementById("run");
// const timerEl = document.getElementById("timer");
const todoistEl = document.getElementById("todoist");
const sectionEl = document.querySelectorAll("section");

runEl.addEventListener("click", function() {
    mainEl.classList.toggle("center");
})

mainEl.addEventListener("click", function(event) {

for (elem of sectionEl) {
    elem.onclick = function() {
        // console.log(this);
        this.classList.toggle("short");
    }
    // event.target.classList.toggle("short");
}
})