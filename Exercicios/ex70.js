function hightOrder(arr, valor) {
    // let novoArray = []
    // for (let i = 0; i < arr.length; i++) {
    //     novoArray.push(arr[i](valor))
    // }
    // return novoArray
    return arr.map((arr) => arr(valor))
}
let number = 3;

let arrayFunction = [(el) => el + el, (el) => el * el, (el) => el / 2]


console.log(hightOrder(arrayFunction, number))