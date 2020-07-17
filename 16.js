const liczba1El = document.querySelector("#liczba1");
const liczba2El = document.querySelector("#liczba2");
const operationTypeEl = document.querySelector("#operationtype");
const buttonScoreEl = document.querySelector("#score");
const buttonAddFieldEl = document.querySelector("#addfield");

let Score = {
    sum: function() {
        return this.liczba1a + this.liczba2a;
    },
    multiply: function() {
        return this.liczba1a * this.liczba2a;
    }
}

function wynik() {
    Score.liczba1a = Number(liczba1El.value);
    Score.liczba2a = Number(liczba2El.value);
    Score.operationType = operationTypeEl.value;
    switch(Score.operationType) {
        case "+":
            console.log(Score.sum());
            break;
            
        case "*":
            console.log(Score.multiply());
            break;
    }
}

buttonScoreEl.addEventListener("click", wynik)