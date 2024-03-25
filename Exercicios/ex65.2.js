function operacao(num, calback) {
    return num.map(calback).reduce((num, index) => num + index)
}

let calc = n => n * 2

console.log(operacao([2, 1, 35, 4, 5, 6, 4], calc))

