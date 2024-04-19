function productOfArray(arr) {
    if (arr.length === 0) {
        return 1
    }
    return arr[0] * productOfArray(arr.slice(1))/*vai cortar o indice zero e vai comecar a contagem do primeiro indice */
}


console.log(productOfArray([1, 2, 3, 4, 5]))