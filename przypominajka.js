const inner = document.querySelector("p");
const innerDwa = document.querySelector("#dwa");


const witek = {
    "imie": "Witek",
    predkosc: 99,
    "liczenie": function wszystko(text, x, y) {

        function sum() {
            return x + y
        }
        inner.innerHTML = text + sum();},

        "liczenieDwa": function wszystko(text, x, y) {

            function sum() {
                return x + y
            }
            innerDwa.innerHTML = text + sum();}

        // if (x > 0) {Inner.innerHTML = sum}
        // else {Inner.innerHTML = "kupa"};

        // console.log("miki");
        // console.log(Number(true));
        // console.log(Number(false));

        // for (let i = 0; i < 10; i++) {
        //     console.log(i + y)
        // }

}

witek.liczenie("psik: ", 10, 5);

const liczby = [];

// for (let i = 0; i < 10; i++) {liczby.push(i); console.log(liczby[i]);}
// console.log(liczby);


for (let i = 0; i < 10; i++) {witek.liczenieDwa("psik: ", i, i*2)};

let arr = [1,2,3,4,5,6,7,8]
console.log('arr: ' + arr);
let arrCopy = arr.slice();
console.log("arrCopy: " + arrCopy);

// innerDwa.style.color = "#f00";
innerDwa.classList.add("zielony");