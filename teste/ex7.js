function binarySearch(arr, num) {
    let inicio = 0;
    let fim = arr.length - 1;
    let meio = Math.floor((inicio + fim / 2));
    while (arr[meio] !== num && inicio <= fim) {
        if (num > arr[meio]) {
            inicio = meio + 1;
        } else {
            fim = meio - 1
        }
        meio = Math.floor((inicio + fim / 2))
    }
    if (arr[meio] === num) {
        return meio;
    }

}



console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 15))