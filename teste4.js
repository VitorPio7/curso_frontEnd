function sumZero(arr) {
    let begin = 0;
    let end = arr.length - 1;
    while (begin < end) {
        let sum = arr[begin] + arr[end];
        if (sum === 0) {
            return [arr[begin]], [arr[end]]
        } else if (sum > 0) {
            end--;
        } else {
            begin++
        }
    }
}




console.log(sumZero([-6, -3, -2, -1, 3, 1, 2, 5]))