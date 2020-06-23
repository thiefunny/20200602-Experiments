const inputEl = document.querySelector("input");
const listItemEl = document.querySelectorAll(".list__item");
const listEl = document.querySelector("ul");
// const bodyEl = document.querySelector("body");

inputEl.addEventListener("keypress", function (event) {
    
    // console.log(listItemEl);
    if (event.keyCode === 13) {
        let li1 = document.createElement("li");
        listEl.appendChild(li1);
        li1.setAttribute("class", "list__item");
        li1.innerHTML = inputEl.value;
        inputEl.value = '';

        // let listItemEl = document.querySelectorAll(".list__item");
        // for (let elem of listItemEl) {
        //     elem.addEventListener("click", function() {
        //         elem.classList.toggle("done");
        //     })

    }
    }
    )

console.log(listEl);

    listEl.addEventListener("click", function() {
        for (let elem of listItemEl) {
        elem.classList.toggle("done");}
    })

// function toggleDone() {
    // console.log(listItemEl);


// toggleDone();


// listItemEl.addEventListener("click", function() {
//     listItemEl.classList.toggle("done");
// })