const inputEl = document.querySelector("input");
const liEls = document.querySelectorAll(".list__item");
const ulEl = document.querySelector("ul");

function addItem() {
    inputEl.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            ulEl.appendChild(createNewItem(inputEl.value));
            inputEl.value = '';
        }
    })
}

function createNewItem(text) {
    let newItem = document.createElement("li");
    newItem.classList.add("list__item");
    newItem.innerHTML = text;
    newItem.appendChild(createNewCross());
    return newItem;
}

function createNewCross() {
    const spanCross = document.createElement("span");
    spanCross.innerHTML = "&times;"
    spanCross.classList.add("close__button");
    return spanCross;
}

function toggleDone() {
    ulEl.addEventListener("click", function (event) {
        event.target.classList.toggle("done");
        let crossEl = document.querySelectorAll(".close__button");
        for (elem of crossEl) {
            if (event.target === elem) {
                event.target.parentNode.remove();
            }
        }
    })
}



addItem();
toggleDone();