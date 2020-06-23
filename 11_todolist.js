const inputEl = document.querySelector("input");
const listItemEl = document.querySelector(".list__item");
const listEl = document.querySelector("ul");
const bodyEl = document.querySelector("body");

let li1 = document.createElement("li");

inputEl.addEventListener("keypress", function(event) {
        console.log(event);
})

inputEl.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {console.log(inputEl.value);}
})

// console.log(inputEl.value);

// console.log(li1);
// listEl.appendChild(li1);
// li1.setAttribute("class", "list__item");
// li1.innerHTML = "coś";



// function toggleDone() {
//     listItemEl.classList.toggle("done");
// }

// listItemEl.addEventListener("click", toggleDone);