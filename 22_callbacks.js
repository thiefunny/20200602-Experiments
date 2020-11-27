const talkDelay = () => Math.floor(Math.random() * 1000) + 500;
const talkLongDelay = 3000;

const arr = ['- Cześć Ksenia.', '- Cześć Adam, co tam?', '- Chuj Ci w dupę.', '- ... jak zawsze uprzejmy, a tak na serio, to co chciałeś?', `- ... długo jeszcze będę czekać na odpowiedź? Minęło już ${talkLongDelay} milisekund...`, `- ... aaa whatever, pa Adaś...`, '- ... i chuj Ci w dupę też.'];

//  21_promises.js - O TYM PLIKU CHCĘ POGADAĆ
//  oraz tutaj o tym czym jest argument resolve

////////// rozmowa typ 5 Promises

let indexArr = -1;
const setIndex = _ => indexArr += 1;
const print = _ => {
    console.log(arr[setIndex()])
}

new Promise((resolve) => {
        resolve()
    })
    .then(_ => {
        print();
        return new Promise((resolve) => {
            setTimeout(resolve, talkDelay()); // co to jest ten resolve, który jest w setTimeout jako funkcja argument, a przecież to nie jest argument
        })
    })
    .then(_ => {
        print();
        return new Promise((resolve) => {
            setTimeout(resolve,talkDelay());
        })
    })
    .then(_ => {
        print();
        return new Promise((resolve) => {
            setTimeout(resolve,talkDelay());
        })
    })
    .then(_ => {
        print();
        return new Promise((resolve) => {
            setTimeout(resolve,talkLongDelay);
        })
    })
    .then(_ => {
        print();
        return new Promise((resolve) => {
            setTimeout(resolve,talkLongDelay);
        })
    }).then(_ => {
        print();
        return new Promise((resolve) => {
            setTimeout(resolve,talkLongDelay);
        })
    }).then(_ => {
        print();
    })


////////// rozmowa typ 4 async callbacks

// let indexArr = -1;

// const setIndex = _ => indexArr += 1;

// const talk = (callback) => setTimeout(_ => callback(arr[setIndex()]), talkDelay());
// const talkLong = (callback) => setTimeout(_ => callback(arr[setIndex()]), talkLongDelay);


// const print = arg => console.log(arg);

// talk((elem) => {
//     print(elem);
//     talk((elem) => {
//         print(elem);
//         talk((elem) => {
//             print(elem);
//             talk((elem) => {
//                 print(elem);
//                 talkLong((elem) => {
//                     print(elem);
//                     talkLong((elem) => {
//                         print(elem);
//                         talkLong((elem) => {
//                             print(elem);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })



////////// rozmowa typ 3 async callbacks

// const funcA = (callback) => setTimeout(_ => callback(arr[0]), miliseconds)
// const funcB = (callback) => setTimeout(_ => callback(arr[1]), miliseconds)
// const funcC = (callback) => setTimeout(_ => callback(arr[2]), miliseconds)
// const funcD = (callback) => setTimeout(_ => callback(arr[3]), miliseconds)

// const print = arg => console.log(arg);

// funcA((elem) => {
//     print(elem);
//     funcB((elem) => {
//         print(elem);
//         funcC((elem) => {
//             print(elem);
//             funcD((elem) => {
//                 print(elem)
//             })
//         })
//     })
// })




////////// rozmowa typ 2 callbacks

// let indexArr = -1;

// const setIndex = _ => indexArr += 1;

// const print = (index) => {console.log(arr[index])}

// const dialog = (callback) => {
//     callback(setIndex());
// }

// for (i=0; i<arr.length; i++) {dialog(print);}






////////// rozmowa typ 1 setInterval

/* let x = 0

let y = setInterval(_ => {
    console.log(arr[x])
    x += 1
    if (x > 4) {
        clearInterval(y)
    }
}, 1000) */