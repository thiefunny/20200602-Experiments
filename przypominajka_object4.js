let Fish = function (gatunekarg, wielkoscarg) {
    this.gatunek = gatunekarg,
    this.wielkosc = wielkoscarg,
    this.show = function () {
        return `${this.gatunek} ${this.wielkosc}`
    }
}




// let fish1 = new Fish('miki', 'mała');
// let fish2 = new Fish('wiki', 'duza');

// console.log(fish1.show())
// console.log(fish2.show())