const inputCountEl = document.querySelector("#inputcount");
const contentOneEl = document.querySelector(".content__one");
const contentTwoEl = document.querySelector(".content__two");
const mainEl = document.querySelector("main");
let sumOfInputs = 0;

function inputcountfunction(event) {
    if (event.key === "Enter") {
        inputcount = inputCountEl.value;
        inputCountEl.value = null;
        contentOneEl.style.display = "none";
        renderforms();
        inputCountEl.removeEventListener("keydown", inputcountfunction);
    }
}

function renderforms() {

    let contentTwoEl = document.createElement("div");
    let contentTwoUlEl = document.createElement("ul");


    mainEl.appendChild(contentTwoEl);
    contentTwoEl.appendChild(contentTwoUlEl);

    contentTwoEl.setAttribute("class", "content_two");

    for (let i = 0; i < inputcount; i++) {
        let contentTwoLiEl = document.createElement("li");
        let contentTwoInputEl = document.createElement("input");
        contentTwoUlEl.appendChild(contentTwoLiEl);
        contentTwoLiEl.appendChild(contentTwoInputEl);
        contentTwoInputEl.setAttribute("id", "contenttwoinputel");
        contentTwoInputEl.setAttribute("type", "number");
    }

    contentTwoUlEl.firstElementChild.firstElementChild.focus();
    let lastInput = contentTwoUlEl.lastElementChild.firstElementChild;
    lastInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            contentTwoEl.style.display = "none";
            contentThreeCalculate();
        }
    })
}


function contentThreeCalculate() {

    for (let elem of document.querySelectorAll("#contenttwoinputel")) {
        sumOfInputs = sumOfInputs + Number(elem.value);
    }
    contentFourStripes();
}


function contentFourStripes() {
    
    for (let i = 0; i < sumOfInputs; i++) {
        mainEl.appendChild(document.createElement("div")).setAttribute("class", "stripe");
    }
    let stripeDiv = document.querySelectorAll(".stripe");
    for (elem of stripeDiv) {
        elem.style.width = 100 / sumOfInputs + "%";
        elem.style.height = "100%";
        elem.style.backgroundColor = "rgb(" + Math.random()*255 + ",0,0)";
    }
    mainEl.appendChild(document.createElement("button")).classList = "bigbutton";
    let buttonEL = document.querySelector(".bigbutton");
    buttonEL.innerHTML = "click";
    buttonEL.addEventListener("click", contentFive)
}

function contentFive() {
    console.log("contentFive");
    
}

inputCountEl.focus();
inputCountEl.addEventListener("keydown", inputcountfunction);