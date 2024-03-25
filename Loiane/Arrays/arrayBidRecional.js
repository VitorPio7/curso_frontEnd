let array1 = [[12, 5, 6], [1, 6, 4], [5, 6, 89]]
let array2 = [[2, 4, 5], [4, 3, 2], [4, 8, 9]]
let i = 0
let soma = [];

do {
    let j = 0;
    soma[i] = []
    do {
        soma[i][j] = [];
        soma[i][j] = array1[i][j] + array2[i][j]
        j++
    } while (j < array2.length)
    i++
} while (i < array1.length)

console.log(soma)