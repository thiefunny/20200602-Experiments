let repeatTimes = 0;
let fishes = new Array;

let Fish = function (gatunekarg, wielkoscarg) {
    this.gatunek = gatunekarg,
        this.wielkosc = wielkoscarg
}

Fish.prototype.show = function () {
    return `${this.gatunek} ${this.wielkosc}`
}

Fish.prototype.talk = function () {
    return `Złowiłem właśnie ${this.show()}! :)`
}

for (i = 0; i < 10; i++) {
    let j = Math.round(Math.random() * 100);
    fishes.push(new Fish(`ryba${i}`, j));
}

konsola = () => {
    let x = Math.round(Math.random() * 9);
    console.log(fishes[x].talk())

    if (repeatTimes >= 1) {
        clearInterval(repeat)
    } else {
        repeatTimes++;
    }

}

let repeat = setInterval(konsola, 50);