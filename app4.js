const canvasEl = document.querySelector("#drawing");
const ctx = canvasEl.getContext('2d');

ctx.strokeStyle = '#fff';
let x = 0;

function circle(x) {

    // ctx.beginPath();
    ctx.arc(100, 100, x, 0, 2 * Math.PI);
    ctx.stroke();
}

setInterval(function () {
    if (x < 100) {
        x++;
        circle(x);
    }
}, 100);



// ctx.clearRect(20,20,40,40);


// ctx.fillStyle = '#d00';
// ctx.fillRect(10,10,50,50);

// ctx.strokeStyle = 'rgb(255, 255, 255)';
// ctx.strokeRect(30,30,100,70);

// ctx.clearRect(20,20,40,40);


// ctx.strokeStyle = 'rgb(0, 255, 255)';
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(400, 350);
// ctx.lineTo(100, 250);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100,100,50,0,2*Math.PI);
// // ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.arcTo(100,100,300,300,300);
// ctx.stroke();