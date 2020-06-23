const inputEl = document.querySelector("input");
const liEls = document.querySelectorAll(".list__item");
const ulEl = document.querySelector("ul");
let crossEl = document.querySelectorAll(".close__button");

function addItem() {
    inputEl.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const newItem = document.createElement("li");
            newItem.innerHTML = inputEl.value;
            newItem.classList.add("list__item");
            ulEl.appendChild(newItem);
            const spanCross = document.createElement("span");
            spanCross.innerHTML = "&times;"
            spanCross.classList.add("close__button");
            newItem.appendChild(spanCross);
            console.log(spanCross);
            inputEl.value = '';
        }
    })
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

// ulEl.onmouseover = function(event) {
//     event.target.classList.toggle("show");
// }

//  function removeItem() {
//     ulEl.addEventListener("click", function {

//  })



addItem();
toggleDone();
// removeItem();