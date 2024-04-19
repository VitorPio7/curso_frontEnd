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
        tempSum = tempSum - arr[i - sub] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum

}

console.log(maxSubarraySum([100, 200, 300, 400], 2))