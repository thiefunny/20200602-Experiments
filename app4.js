const canvasEl = document.querySelector("#drawing");
const ctx = canvasEl.getContext('2d');

// ctx.strokeStyle = '#fff';
let x = 250,
    y = 250,
    r = 0,
    a = 0.1, cr = 200, cg = 200, cb = 200;


function circle(x, y, r, cr, cg, cb, a) {
    
    ctx.beginPath();
    ctx.strokeStyle = 'hsla(' + cr + ', ' + cg + '%, ' + cb + '%, ' +  a + ')';
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

setInterval(function () {
    if (r < 400) {
        r++;
        a = 0.5;
        x += Math.random() * 4 - 2;
        y += Math.random() * 4 - 2;
        cr = r*3.6; 
        cg = 70;
        cb = 50; 
        circle(x, y, r, cr, cg, cb, a);
    }
}, 30);