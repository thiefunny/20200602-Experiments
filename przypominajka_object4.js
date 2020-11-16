let Fish = function (gatunekarg, wielkoscarg) {
    this.gatunek = gatunekarg,
    this.wielkosc = wielkoscarg
}

Fish.prototype.show = function () {
    return `${this.gatunek} ${this.wielkosc}`
    }

let arr = new Array;
let variable, fishvar;

for (i = 0; i < 10; i++) {
    let j = Math.round(Math.random() * 100);
    fish = new Fish(`ryba${i}`, j)
    arr.push(fish);
}

for (elem of arr) {
    // console.log(elem);
    console.log(elem.show());
}

// console.log(arr[1].show());

// arr[3]

// console.log(arr[3])


