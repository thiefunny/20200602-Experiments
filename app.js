const parentEl = document.querySelector(".parent");

for (let i = 0; i < parentEl.childElementCount-1; i++) {

    parentEl.children[i].style.width = (i + 1) * 10 + "px";
    parentEl.children[i].style.height = "20px";
    parentEl.children[i].style.backgroundColor = "rgb(" + (200 - i * i) + "," + i * i / 2 + "," + i * 10 + ")";

    if (i % 2 === 1) {
        parentEl.children[i].style.width = (200 - (i + 1) * 10) + "px";
        parentEl.children[i].style.backgroundColor = "rgb(" + (230 - (i*i)) + "," + (200 - (i*5)) + "," + 0 + ")";
    }
}