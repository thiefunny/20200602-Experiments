const bodyEl = document.querySelector("body");
const pEl = document.querySelector("p");
const h1El = document.querySelector("h1");

document.addEventListener("mousemove", function (event) {

    // console.log(event);
    h1El.innerHTML = "można ctrl albo shift, uwaga na easter egga";

if (event.shiftKey && event.ctrlKey) {
    bodyEl.style.backgroundColor = "#000";
    pEl.classList.add("warning");
    pEl.innerHTML = "nie przesadzaj...";
    h1El.innerHTML = "(ha ha ha)";
}

else if (event.shiftKey === false && event.ctrlKey === false) {
    bodyEl.style.backgroundColor = "rgb(" + (event.clientX / window.innerWidth * 100 + 50) + ","  + (event.clientY / window.innerHeight * 100 + 50) + ",0)";
    pEl.innerHTML = event.clientX + "" + event.clientY;
    pEl.classList.remove("warning");
}

else if (event.ctrlKey === true) {
    bodyEl.style.backgroundColor = "rgb(0," + (event.clientX / window.innerWidth * 100 + 50) + "," + (event.clientY / window.innerHeight * 100 + 50) + ")";
    pEl.innerHTML = "ctrl";
    pEl.classList.remove("warning");
}

else if (event.shiftKey === true)  {

    bodyEl.style.backgroundColor = "rgb(" + (event.clientX / window.innerWidth * 100 + 50) + ",0," + (event.clientY / window.innerHeight * 100 + 50) + ")";
    pEl.innerHTML = "shift";
    pEl.classList.remove("warning");
}


})