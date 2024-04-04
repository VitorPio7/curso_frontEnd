function reverseArray(a) {
    let newArr = []
    for (let i = a.length - 1; i >= 0; i--) {
        newArr.push(a[i])
    }
    return newArr

}

let arr = [1, 4, 1, 3, 2];

console.log(reverseArray(arr))