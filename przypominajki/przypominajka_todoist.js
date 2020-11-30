const inputEl = document.querySelector("input");
const tasksEl = document.querySelector(".todoist__task__group");

inputEl.focus();
inputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let task = document.createElement("li");
        tasksEl.appendChild(task);
        task.innerHTML = inputEl.value;
        inputEl.value = '';
    }
})