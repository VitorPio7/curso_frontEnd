function linearSearch(arr, value) {
    for (let i = 0; i < arr.legth; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}