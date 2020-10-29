const targettimeEl = document.querySelector(".target");
const daysEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

let teraz = new Date();
let zaminute = new Date(1000*10);
// const wtedy = teraz + zaminute;
// const wtedy = new Date("2020-07-20 21:17:25");
let wtedy = new Date(teraz.getTime() + zaminute.getTime());
// let roznica = new Date(wtedy - teraz);
console.log("teraz " + teraz.getTime());
console.log("zaminute " + zaminute);
console.log("wtedy " + wtedy);
// console.log("roznica " + roznica);

function roznicaczasu() {

    teraz = new Date();
    let roznica = new Date(wtedy - teraz);

    let miliseconds = Math.floor(roznica.getTime());
    let seconds = Math.floor(miliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let hoursleft = hours - days * 24;
    let minutesleft = minutes - days * 24 * 60 - hoursleft * 60;
    let secondsleft = seconds - days * 24 * 60 * 60 - hoursleft * 60 * 60 - minutesleft * 60;

    // console.log("days " + days + ", hours " + hoursleft + ", minutes " + minutesleft + ", seconds " + secondsleft)

    return {
        rDays: days,
        rHours: hoursleft,
        rMinutes: minutesleft,
        rSeconds: secondsleft
    }

}

let showTimer = setInterval(function () {
    // console.log(Math.floor((wtedy - teraz)/1000));
    if (Math.floor(wtedy - teraz)/1000 < 1) {
        clearInterval(showTimer); targettimeEl.innerHTML = "JUUUUUUUUŻ!!!!!!";
    } else {
        targettimeEl.innerHTML = "odliczamy 10 sekund";
        daysEl.innerHTML = roznicaczasu().rDays;
        hourEl.innerHTML = roznicaczasu().rHours;
        minEl.innerHTML = roznicaczasu().rMinutes;
        secEl.innerHTML = roznicaczasu().rSeconds;
    }
}, 1000);




// daysEl.innerHTML = czas.rDays;