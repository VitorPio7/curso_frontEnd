function maxSubbarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];/*2+6+9=17 */
    }
    tempSum = maxSum; /*tempSum=17 */
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]; /*17-arr[3-3]+arr[3]=17 */
        maxSum = Math.max(maxSum, tempSum);/**(17, 17) */
    }
    return maxSum
}
/*vai contar a maior soma de tres numeros juntos de um array aqui é O(n)*/
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))