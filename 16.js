const liczba1El = document.querySelector("#liczba1");
const liczba2El = document.querySelector("#liczba2");
const operationTypeEl = document.querySelector("#operationtype");
const buttonScoreEl = document.querySelector("#score");
const buttonAddFieldEl = document.querySelector("#addfield");
const ulEL = document.querySelector(".inputs");
const pEl = document.querySelector("p");

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
    let InputEl = document.querySelectorAll("input");
    let i = 0;
    for (elem of InputEl) {
        Score[i] = Number(elem.value);
        console.log(Score[i]);
        i++;
    }

    Operation.operationType = operationTypeEl.value;
    console.log(operationTypeEl.value);
    
    switch (Operation.operationType) {
        case "+ (add)":
            pEl.innerHTML = Operation.sum();
            break;

        case "* (multiply)":
            pEl.innerHTML = Operation.multiply();
            break;
    }
}

function addField() {
    let newInput = document.createElement("li");
    newInput.innerHTML = 'Number: <input type="number">';
    ulEL.appendChild(newInput);
}

buttonScoreEl.addEventListener("click", wynik);
buttonAddFieldEl.addEventListener("click", addField);