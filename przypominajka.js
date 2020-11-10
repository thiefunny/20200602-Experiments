const inner = document.querySelector("p");

const witek = {
    "imie": "Witek",
    predkosc: 99,
    "liczenie": function wszystko(text, x, y) {

        function sum() {
            return x + y
        }
        inner.innerHTML = text + sum();}

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

for (let i = 0; i < 10; i++) {liczby.push(i); console.log(liczby[i]);}
console.log(liczby);

