const imgEl = document.querySelector("img");
const buttonEl = document.querySelector("button");

function roluj() {
    imgEl.style.transition = "1s all ease";
    imgEl.src = "kostki/" + (Math.floor(Math.random()*6) + 1) + ".png";
}

buttonEl.addEventListener("click", roluj);