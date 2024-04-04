function dividirArr(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += n) {
        newArr.push(arr.slice(i, i + n))
    }
    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(dividirArr(arr, 3))