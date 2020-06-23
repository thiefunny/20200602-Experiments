const questionEl = document.querySelectorAll(".question");
const answerEl = document.querySelectorAll(".answer");

function reveal() {
    for (elem of questionEl) {
        elem.onclick = function (event) {
            if (event.target.nextElementSibling.classList.contains("answer")) {
                event.target.nextElementSibling.classList.toggle("show");
            }
        }
    }
}

reveal();