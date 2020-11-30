const inputEl = document.getElementById("todoinput");
const ulEl = document.querySelector("ul");
const todoistSectionEl = document.getElementById("todoist");

addTask = (event) => {
    if (event.key === "Enter") {
        liEl = document.createElement("li");
        liEl.classList.add("liTodoist")
        ulEl.appendChild(liEl);
        liEl.innerHTML = inputEl.value;
        inputEl.value = null;
    }
}

removeTask = (event) => {
    let liEls = document.querySelectorAll(".liTodoist");
    for (elem of liEls) {
        if (event.target === elem) {elem.remove()}
    }
    inputEl.focus();
}

inputEl.value = null;
inputEl.focus();
inputEl.addEventListener("keydown", addTask);
ulEl.addEventListener("click", removeTask);