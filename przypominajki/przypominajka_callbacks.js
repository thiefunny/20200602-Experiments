const squareEquation = (arr) => {
    let result = [];
    for (item of arr) {
        result.push(Math.pow(item, 2))
    }
    return result;
}

const sumEquation = (arr) => {
    let result = 0;
    for (item of arr) {
    result += item;
    }
    return result;
}

// console.log(sumEquation([1,2,3,4,5]));

// console.log(squareEquation([1,2,3,4]))

const calculations = (arr2, callback) => {
    return callback(arr2);
}



console.log(calculations(calculations([2,4,7,9], squareEquation), sumEquation))
// console.log(calculations([2,4,7,9], sumEquation))