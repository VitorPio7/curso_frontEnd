function sortedPointer(arr, sum) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let soma = arr[left] + arr[right];
        if (soma < sum) {
            left++
        } else if (soma > sum) {
            right--
        } else if (soma == sum) {
            return [arr[left], arr[right]]
        }
    }
    return false

}



console.log(sortedPointer([1, 2, 3, 4, 5], 7))