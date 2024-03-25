function hightOrder(array, callback) {
    return array.filter(callback)
}

let call = (el) => el % 2 != 0;
let num = [21, 23, 12, 1, 2, 32, 12, 4, 43, 2]


console.log(hightOrder(num, call))