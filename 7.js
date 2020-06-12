const bodyEl = document.querySelector("body");
const pEl = document.querySelector("p");


document.addEventListener("mousemove", function (event) {

    bodyEl.style.backgroundColor = "rgb(0," + (event.clientX / window.innerWidth * 100 + 50) + "," + (event.clientY / window.innerHeight * 100 + 50) + ")";
    pEl.innerHTML = event.clientX + "" + event.clientY;

})