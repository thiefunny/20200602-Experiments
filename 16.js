const liczba1El = document.querySelector("#liczba1");
const liczba2El = document.querySelector("#liczba2");
const buttonEl = document.querySelector("button");

let Score = {
    sum: function() {
        return this.liczba1 + this.liczba2;
    }
    // multiply: function() {
    //     return liczba1a * liczba2a;
    // },
}

liczba1El.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        Score.liczba1a = liczba1El.value;
        console.log(Score.liczba1a);
    }
})

liczba2El.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        Score.liczba2a = liczba2El.value;
        console.log(Score.liczba2a);
    }
})

// buttonEl.onclick = function() {
//     // liczba1a = liczba1El.value;    liczba2a = liczba2El.value;

//     console.log(`--- ${liczba1a}`);
//         console.log(`--- ${liczba2a}`);
// }

document.addEventListener("keypress", function (event) {
    if (event.key === "w") {
        console.log(`--- ${Score.liczba1a}`);
        console.log(`--- ${Score.liczba2a}`);
        console.log(Score.sum())
    }
})



// console.log(Score.multiply());
// let liczba1a = 20;
// let liczba2a = 30;



// console.log(Score.liczba1);
// console.log(Score.liczba1 + Score.liczba2);

// console.log(Score.cos);
// console.log(Score.cosfunction)