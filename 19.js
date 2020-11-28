// const doprint = x => {
//     console.log(x)
// }

// const kalkulator = (x, y, print) => {
//     // return x + y;
//     print(x + y);
// }

// // kalkulator(5, 6, doprint)


// // ----------------------


// const dodaj = (x, y) => x + y;

// const uzyj = (i, j, callback) => console.log(callback(i, j));

// // uzyj(356, 153, dodaj)


// --------------------

// const inputEl = document.querySelector("input");

// const func = (callback) => {
//     inputEl.addEventListener("keydown", e => {
//         if (e.key === "Enter") {
//             element = inputEl.value;
//         }
//         callback(element);
//     })
// }

// const print2 = x => {
//     setTimeout(_ => console.log(x), 1000)
// }

// // func(print2);

// --------------------------------

// setTimeout(, 1000);


// const zakupy = callback => setTimeout(_ => callback(), 1000);
// const przygotowanie = callback => setTimeout(_ => callback(), 1000);
// const gotowanie = _ => setTimeout(_ => console.log("gotowanie"), 1000);

// zakupy(_ => {

//     console.log("zakupy");
//     przygotowanie(_ => {console.log("przygotowanie")})

// })

// -------------------------------


// const zakupyV = function (callback) {
//     setTimeout(callback, 1500);
// };
// const przygotowaniaV = function (callback) {
//     setTimeout(callback, 1500);
// };
// const jedzenieV = function (callback) {
//     setTimeout(callback, 1500);
// };

// zakupyV(function () {
//     console.log("zakupyV");
//     przygotowaniaV(_ => {
//         console.log("przygotowaniaV")
//         jedzenieV(_ => console.log('jedzenieV'))
//     });
// })

// const zakupyV = function (callback) {
//     setTimeout(function () {callback("zakupyV")}, 1500);
// };

// zakupyV(function (elem) {console.log(elem)});


// ---------------------------------------------------------

const jeden
















