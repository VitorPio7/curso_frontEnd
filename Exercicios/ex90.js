function receberArr(arr) {
    return [...new Set(arr)]
}

console.log(receberArr([23, 2, 2, 4, 2, 6, 44, 1, 5, 2, 4]))