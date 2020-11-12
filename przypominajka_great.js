const inputCountEl = document.querySelector("#inputcount");
const contentOneEl = document.querySelector(".content__one");
const mainEl = document.querySelector("main");

function renderforms() {

    let contentTwoEl = document.createElement("div");
    let contentTwoUlEl = document.createElement("ul");
    
    // let contentTwoInputEl = document.createElement("input");

    mainEl.appendChild(contentTwoEl);
    contentTwoEl.appendChild(contentTwoUlEl);
    // contentTwoUlEl.appendChild(contentTwoLiEl);

    contentTwoEl.setAttribute("class", "content_two");
    // contentTwoLiEl.setAttribute("class", "content_two_input_li");

    for (let i = 0; i < inputcount; i++) {
        let contentTwoLiEl = document.createElement("li");
        let contentTwoInputEl = document.createElement("input");
        contentTwoUlEl.appendChild(contentTwoLiEl);
        contentTwoLiEl.appendChild(contentTwoInputEl);
    }



    console.log(inputcount);


}

function inputcountfunction(event) {
    if (event.key === "Enter") {
        inputcount = inputCountEl.value;
        inputCountEl.value = null;
        contentOneEl.style.display = "none";
        renderforms();
        inputCountEl.removeEventListener("keydown", inputcountfunction);
    }
}




inputCountEl.focus();
inputCountEl.addEventListener("keydown", inputcountfunction);