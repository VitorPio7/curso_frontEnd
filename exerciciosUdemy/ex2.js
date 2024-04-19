function areThereDuplicates(...argument) {
    let collection = {}
    for (let val in argument) {
        let num = argument[val];
        if (collection[num]) {
            collection[num] += 1
        } else {
            collection[num] = 1
        }
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd'))


function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {

        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}