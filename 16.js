const liczba1El = document.querySelector("#liczba1");
const liczba2El = document.querySelector("#liczba2");

let Score = {
    sum: function() {
        // return this.liczba1 + this.liczba2;
    },
    multiply: function() {
        return liczba1a * liczba2a;
    },
}

liczba1El.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let liczba1a = liczba1El.value;
        console.log(liczba1a);
    }
})

liczba2El.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let liczba2a = liczba2El.value;
        console.log(liczba2a);
        // console.log(Score.sum());
        
    }
    
})

window.addEventListener("keypress", function () {
    
})

console.log(`--- ${liczba1a}`);
console.log(`--- ${liczba2a}`);

console.log(Score.multiply());
// let liczba1a = 20;
// let liczba2a = 30;



// console.log(Score.liczba1);
// console.log(Score.liczba1 + Score.liczba2);

// console.log(Score.cos);
// console.log(Score.cosfunction)