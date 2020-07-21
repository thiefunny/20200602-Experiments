// let sumarr = (arr) => {

// }

////////////// NIE DZIAŁA I BEZ SENSU

let i = 0;

function sumarr() {
    let arr = [1,2,3,4,5];
    if (i === arr.length) {
        return arr[arr.length]
    }
    return arr[i] + sumarr(arr[i + 1]);
}

console.log(sumarr());