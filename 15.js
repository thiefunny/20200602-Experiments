const daysEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

let teraz = new Date();
const wtedy = new Date("2021-01-01");

let czas = setInterval(function() {
    
    teraz = new Date();
    roznica = new Date(wtedy - teraz);
    
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
        rhours: hoursleft, 
        rMinutes: minutesleft, 
        rSeconds: secondsleft
    }

}, 1000);

console.log(czas);

// daysEl.innerHTML = czas.rDays;