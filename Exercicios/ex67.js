function hightOrder(array, callback) {
    return array.map(callback)
}


let numbers = [[5, 6, 87], [8, 9, 64], [6, 45, 4]];
let call = (arr) => arr.reduce((a, b) => a * b);


console.log(hightOrder(numbers, call))
