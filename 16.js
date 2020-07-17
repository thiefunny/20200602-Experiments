const liczba1El = document.querySelector("#liczba1");
const liczba2El = document.querySelector("#liczba2");

liczba1El.addEventListener("keypress")

let liczba1a = 20;
let liczba2a = 30;

let Score = {
    sum: function() {
        return this.liczba1 + this.liczba2;
    },
    multiply: function() {
        return liczba1a * liczba2a;
    },
}

// console.log(Score.liczba1);
// console.log(Score.liczba1 + Score.liczba2);
console.log(Score.sum());
console.log(Score.multiply());
// console.log(Score.cos);
// console.log(Score.cosfunction)