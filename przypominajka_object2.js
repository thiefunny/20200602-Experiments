const input = document.getElementById("input");
// const p = document.getElementsByTagName("p");
const p = document.getElementById("p");

let content, html;
let htmlcomplete = '';
mik = {
    show(what = 'nie podałeś argumentu') {
        console.log(what);
    },
    hide() {
        this.numer = null;
        this.litera = null;
    },
    numer: 5,
    litera: "a",
    all() {
        console.log(this)
    }
}

wal = new Object;
wal.masakra = function () {
    mik[2] = "mik.wal"
}

input.value = null;
input.focus();
input.onkeydown = (event) => {
    if (event.key === "Enter") {
        content = input.value;
        console.log(content);
        setInterval(function(){
            // p.innerHTML = '';
            htmlcomplete = '';
        for (let i = 0; i < content.length; i++) {
            html = `<span style="color:rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255}">${content[i]}</span>`;
            htmlcomplete = htmlcomplete + html;
        }
        p.innerHTML = htmlcomplete;
        console.log(htmlcomplete)  }, 1000)}}
// ${content[i]}


// html.innerHTML = `${content[0]}`;


// for (let elem of p) {
//     elem.innerHTML = input.value;
//     elem.style.color = "#ff0000"
//     // let whatsEL = elem;
// };
// setInterval(function () {
//     for (elem of whats) {
//         elem.style.color = `rgb(${Math.random()*255},0,0)`
//     }
//     // console.log(elem)
//     // for (i = 0; i < whats.length; i++) {
//     // whatsEl[i].style.color = "#ff00ff"
//     // console.log(typeof whats[i]);
//     // }
// }, 1000);
// witek.style.color =;
// }, 1000);