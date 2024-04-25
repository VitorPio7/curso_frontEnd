function maxSubarraySum(arr, sub) {
    if (arr.length < sub) {
        return null
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < sub; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = sub; i < arr.length; i++) {
        tempSum = tempSum - arr[i - sub] + arr[i];/*300 - arr[2-2]+arr[2] = 300 - arr[0]+arr[2] = 300-100+300=500 */
        maxSum = Math.max(maxSum, tempSum);/*(500,300)=500 */
    }
    return maxSum

}

console.log(maxSubarraySum([100, 200, 300, 400], 2))