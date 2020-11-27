
// chained Promise 3

const dinnerEaten = false;
const wasTasty = true;

const Dinner = new Promise((resolve, reject) => {
    if (dinnerEaten) {
        resolve('Dinner eaten...')
    } else {
        reject(`I'm still hungry!`)
    }
})

const Tasty = new Promise((resolve, reject) => {
    if (wasTasty) {
        resolve("and it was tasty! MNIAM!")
    } else {
        reject("but it was awful. Ble... :(")
    }
})

Dinner
.then(result => {console.log(result); return Tasty})
.then(result => console.log(result))
.catch(result => console.log(result))





// .then(result => console.log(result), result => console.log(result))


// ---------------------------------------------------------------


/* // regular Promise

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const myPromise = new Promise((resolve, reject) => {

    let newarr = _ => {
        let sum = 0;
        arr.map(number => number + 10).forEach(newnumber => sum += newnumber);
        return sum;
    }

    if (
        newarr() > 500
    ) {
        resolve()
    } else {
        reject()
    }

}).then(_ => console.log('ok'), _ => console.log('not ok')); */

// ---------------------------------------------------------------

/* // chained Promise 1

const dinnerEaten = true;
const wasTasty = false;

const Dinner = new Promise((resolve, reject) => {if (dinnerEaten) {resolve()} else {reject()}})
.then(_ => setTimeout(_ => console.log('Dinner eaten...'),2000), _ => console.log('I\'m still hungry!'));

const Tasty = new Promise(function(resolve, reject) {if (wasTasty) {resolve()} else {reject()}})
.then(_ => console.log("and it was tasty! MNIAM!"), function () {console.log("but it was awful. Ble... :(")}) */

// ---------------------------------------------------------------

/* // chained Promise 2

const dinnerEaten = true;
const wasTasty = false;

const Dinner = new Promise((resolve, reject) => {if (dinnerEaten) {resolve()} else {reject()}})
.then(_ => {
    console.log('Dinner eaten...');
    Tasty.then(_ => console.log("and it was tasty! MNIAM!"), function () {console.log("but it was awful. Ble... :(")})
}
    , _ => console.log('I\'m still hungry!'));

const Tasty = new Promise(function(resolve, reject) {if (wasTasty) {resolve()} else {reject()}}) */

// ---------------------------------------------------------------




/* const myPromise2 = new Promise((resolve, reject) => {

    let newarr = _ => {
        let sum = 0;
        arr.map(number => number + 10).forEach(newnumber => sum += newnumber);
        return sum;
    }

    if (
        newarr() > 500
    ) {
        resolve()
    } else {
        reject()
    }

}).then(_ => console.log('ok')).catch(_ => console.log('not ok'));
 */


// const myPromise = new Promise((resolve, reject) => {

//     if (i < 100) {
//         resolve()
//     } 

// });

// myPromise.then(_ => console.log('ok'), () => console.log("not ok"))

// ------------------------------------

// const myPromise = new Promise((a, b) => {

//     if (i < 100) {
//         a()
//     } 

// });

// myPromise.then(_ => console.log('ok'), () => console.log("not ok"))

// ------------------------------------

// new Promise((a, b) => i < 100 ? a() : b()).then(_ => console.log('ok'), _ => console.log('not ok'))

// new Promise((a, b) => i === 100 ? a() : b()).then(_ => console.log('ok'), _ => console.log('not ok'))

// ----------------------------------------


// console.log(myPromise)

// const miki = _ => {
//     return i.map(number => number += 1)
// }

// // console.log(i.map(number => number += 1));

// const miki2 = _ => {
//     return i.map(number => {
//         return number += 1;
//     })
// }

// console.log(miki())
// console.log(miki2())

/* const miki = _ => {
    let sum = new Number;
    arr.map(number => number+10).forEach(newnumber => sum += newnumber);
    console.log(arr)
    console.log(sum)

}

miki() */