const canvasEl = document.querySelector("#drawing");
const ctx = canvasEl.getContext('2d');
const canvasWidth = window.innerWidth/1.2;
const canvasHeight = window.innerHeight/1.5;
const canvasBorder = canvasHeight / 2;
const scoreEl = document.querySelector(".score");

canvasEl.style.borderRadius = canvasBorder + "px";
canvasEl.setAttribute("width", canvasWidth + "px");
canvasEl.setAttribute("height", canvasHeight + "px");

let x = canvasWidth / 2,
    y = canvasHeight / 2,
    r = 0,
    a = 1,
    cr = 200,
    cg = 200,
    cb = 200,
    rstep = 0.1,
    rdiv = 10,
    // speed = document.querySelector("#speed").value,
    speed = 30;
    r2 = 1;
    r3 = 0.1;

function circle(x, y, r, cr, cg, cb, a) {

    ctx.beginPath();
    ctx.strokeStyle = 'hsla(' + cr + ', ' + cg + '%, ' + cb + '%, ' + a + ')';
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    
}

setInterval(function () {
    if (r < 1000) {
        a = document.getElementById("a").value;
        rstep = document.querySelector("#rstep").value;
        rdiv = document.querySelector("#rdiv").value;
        r3 = document.querySelector("#r3").value;
        r2 += Number(r3);
        r += Number(rstep);
        x += r / Number(rdiv) * Math.sin(r);
        y += r / Number(rdiv) * Math.cos(r);
        cr = r * 3.6;
        cg = 100;
        cb = 50;
        circle(x, y, r2, cr, cg, cb, a);
    }
}, speed);