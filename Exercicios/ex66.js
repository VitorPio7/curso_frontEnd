function trueOrfalse(array, callback) {
    return array.map(callback).every((el) => el > 10);
}

let call = (el) => { el * 2 }
let arr = [12, 2, 323, 2, 12, 23, 4, 21, 23, 12, 2]

console.log(trueOrfalse(arr, call))

