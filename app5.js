const canvasEl = document.querySelector("#drawing");
const ctx = canvasEl.getContext('2d');
const canvasWidth = 500;
const canvasHeight = 500;
const canvasBorder = canvasHeight / 2;

canvasEl.style.borderRadius = canvasBorder + "px";
canvasEl.setAttribute("width", canvasWidth + "px");
canvasEl.setAttribute("height", canvasHeight + "px");

let x = canvasWidth / 2,
    y = canvasHeight / 2,
    r = 0,
    a = 0.1,
    cr = 200,
    cg = 200,
    cb = 200;

function circle(x, y, r, cr, cg, cb, a) {

    ctx.beginPath();
    ctx.strokeStyle = 'hsla(' + cr + ', ' + cg + '%, ' + cb + '%, ' + a + ')';
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

setInterval(function () {
    if (r < 400) {
        r += 0.1;
        a = 0.1;
        x += r / 10 * Math.sin(r);
        y += r / 10 * Math.cos(r);
        cr = r * 3.6;
        cg = 100;
        cb = 50;
        circle(x, y, r, cr, cg, cb, a);
    }
}, 4);