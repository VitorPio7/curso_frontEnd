function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {/*length: 9-3+1=7  ou seja vai pegar até o 6 elemento do array*/
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp
        }
    }
    return max;
}
/*vai retornar a maior soma de três digitos sequenciais O(n^2)*/

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
