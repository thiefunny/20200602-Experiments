const buttonJoin = document.querySelector(".join");
const modalEl = document.querySelector(".modal");
const closeEl = document.querySelector(".close");
const allEl = document.querySelector(".all");
const hEl = document.querySelector(".b");

hEl.style.backgroundColor = "#f00";
hEl.style.color = "#f00";
// hEl.className.add("c");

function do_modal() {

buttonJoin.onclick = function() {
    modalEl.classList.toggle("none");
    // hEl.style.backgroundColor = "#f00";
// hEl.style.color = "#f00";
}


closeEl.onclick = function() {
    modalEl.classList.toggle("none");
    // hEl.style.backgroundColor = "#f00";
// hEl.style.color = "#f00";
}

closeEl.onmouseover = function() {
    closeEl.style.cursor = "pointer";
    // buttonJoin.style.backgroundColor = "#f00";
}

window.addEventListener("click", function(event) {
    console.log(event.target)
    if (event.target === allEl) {modalEl.classList.toggle("none");}
    // event.target.style.backgroundColor = "#f00";
    // buttonJoin.style.backgroundColor = "#f00";
})


}

do_modal();