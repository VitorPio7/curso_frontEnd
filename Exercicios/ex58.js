function soma(array) {
    return array.filter((el) => el % 2 == 0).reduce((el, index) => el + index)
}

let numeros = [12, 23, 1, 23, 43, 2]

console.log(soma(numeros))