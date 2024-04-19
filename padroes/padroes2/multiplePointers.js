function averagePair(arr, std) {
    if (arr === null) {
        return false
    }
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

console.log(averagePair([1, 2, 3], 2.5))
