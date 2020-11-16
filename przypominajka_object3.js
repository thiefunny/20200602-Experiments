const inputEl = document.querySelector("input");

inputEl.focus();
inputEl.value = null;

let variableFunction = (event) => {
    let variable = inputEl.value;
    return variable;
}

inputEl.addEventListener("input", variableFunction);

function Zaba() {
        this.noga = variableFunction(),
        this.geba = "brudna",
        this.funkcja = function () {
            console.log(`${this.noga} + ${this.geba}`)
        }

}

inputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let zaba1 = new Zaba;
        zaba1.funkcja();
    }
});