function multiplePointer(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let media = (arr[start] + arr[end]) / 2;
        if (media === target) {
            return true;
        } else if (media < target) {
            start++
        } else if (media > target) {
            end--
        }
    }
    return false
}

console.log(multiplePointer([1, 2, 3], 2.5))