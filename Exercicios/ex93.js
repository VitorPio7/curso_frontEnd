function mediana(arr) {
    arr.sort((a, b) => a - b);
    const middle = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[middle - 1] + arr[middle]) / 2;
    }
    return arr[middle]
}
var arrnum = [12, 20, 35, 5, 5]

console.log(mediana(arrnum))