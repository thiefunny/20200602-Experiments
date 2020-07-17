const liczba1El = document.querySelector("#liczba1");
const liczba2El = document.querySelector("#liczba2");
const operationTypeEl = document.querySelector("#operationtype");
const buttonScoreEl = document.querySelector("#score");
const buttonAddFieldEl = document.querySelector("#addfield");
const ulEL = document.querySelector(".inputs");

let Operation = {
    sum: function () {
        i = 0;
        for (elem of Score) {
            i += elem;
        }
        return i;
        },
        
    multiply: function () {
        i = 1;
        for (elem of Score) {
            i *= elem;
        }
        return i;
    }
};

let Score = [];

function wynik() {
    let digitInputEl = document.querySelectorAll("input");
    let i = 0;
    for (elem of digitInputEl) {
        Score[i] = Number(elem.value);
        i++;
    }

    Operation.operationType = operationTypeEl.value;
    
    switch (Operation.operationType) {
        case "+":
            console.log(Operation.sum());
            break;

        case "*":
            console.log(Operation.multiply());
            break;
    }
}

function addField() {
    let newField = document.createElement("input");
    // newField.classList.add("digitsinput");
    ulEL.appendChild(newField);
}

buttonScoreEl.addEventListener("click", wynik);
buttonAddFieldEl.addEventListener("click", addField);