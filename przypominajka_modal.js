const buttonEl = document.querySelector("button");
const modalEl = document.querySelector(".modal");
const allEl = document.querySelector(".all");

buttonEl.onclick = function() {
    modalEl.classList.toggle("show")
}

document.addEventListener("click", function(event) {
    if (event.target === allEl) {modalEl.classList.remove("show")};
})

 