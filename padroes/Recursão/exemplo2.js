function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);/*chamada recursiva */
}

console.log(sumRange(5))