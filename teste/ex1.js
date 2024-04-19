function isSquaredFrequency(arr1, arr2) {
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < arr1.length; i++) {
        let el = arr1[i]
        if (!obj1[el]) {
            obj1[el] = 1
        } else {
            obj1[el] += 1
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let el = arr2[i]
        if (!obj2[el]) {
            obj2[el] = 1
        } else {
            obj2[el] += 1
        }
    }
    for (let key in obj1) {
        if (obj1[key ** 2] !== obj2[key]) {
            return false
        } else if (obj2[key ** 2] !== obj1[key]) {
            return false
        }
        return true
    }
}

console.log(isSquaredFrequency([1, 2, 3], [9, 1, 4]))

