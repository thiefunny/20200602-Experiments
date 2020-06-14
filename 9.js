const bodyEl = document.querySelector("body");
const pEl = document.querySelector("p");
const h1El = document.querySelector("h1");



document.addEventListener("mousemove", function (event) {

    pEl.innerHTML = "&dagger;"
    pEl.style.top = event.clientY + "px";
    pEl.style.left = event.clientX + "px";
    pEl.style.opacity = Math.abs((event.movementX+event.movementY)/100)+0.1;
    
})