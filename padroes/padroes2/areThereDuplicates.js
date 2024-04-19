function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        let num = arguments[val]
        if (collection[num]) {
            collection[num] += 1
        } else {
            collection[num] = 1
        }
    }
    for (let key in collection) {/*vai iterar sobre as chaves */
        if (collection[key] > 1) return true
    }
    return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'))