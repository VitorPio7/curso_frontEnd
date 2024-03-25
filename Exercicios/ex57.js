function soma(arr) {
    // return arr.filter((el) => el % 2 == 0).reduce((el, index) => el + index)
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            soma += arr[i]
        }
    }
    return soma

}

console.log(soma([12, 23, 3, 2, 1, 2, 4, 2, 3, 2]))