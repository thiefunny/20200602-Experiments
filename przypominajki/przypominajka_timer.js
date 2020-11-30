const timerEl = document.getElementById("timer");
const deadlineEl = document.getElementById("deadline");
const nowEl = document.getElementById("now");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let deadline = new Date(2020, 10, 13, 14, 30, 20);
let now = new Date;

let seconds, minutes, secondsLeft, minutesLeft, difference;
difference = deadline - now;
deadlineEl.innerHTML = deadline;


let zegar = setInterval(function () {

    if (Math.abs(difference) > 1000) {

        now = new Date;
        difference = deadline - now;
        seconds = difference / 1000;
        minutes = seconds / 60;
        minutesLeft = Math.floor(minutes);
        secondsLeft = Math.floor(seconds - minutesLeft * 60);

        nowEl.innerHTML = now;
        minutesEl.innerHTML = "min: " + minutesLeft;
        secondsEl.innerHTML = "sec: " + secondsLeft;

    } else {
        
        console.log("end");
        clearInterval(zegar);
    }

}, 1000);