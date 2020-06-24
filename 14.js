const divEl = document.querySelector("div");
let i = 0;

/* setInterval(function () {
    if (i<100) {
        i+=0.2;
        divEl.style.width = i + "%";
    }
}, 5); */

let movement = setInterval(function () {
            if (i >= 100) {
                clearInterval(movement)
            } else {
                i += .2;
                divEl.style.width = i + "%";
            }
        },
    5);