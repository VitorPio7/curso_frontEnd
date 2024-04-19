function averagePair(arr, std) {
    if (arr === null) {
        return false
    }
    let count = 0
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let media = (arr[left] + arr[right]) / 2;
        if (media === std) {
            return true
        } else if (media < std) {
            left++
        } else {
            right--
        }
    }
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));




