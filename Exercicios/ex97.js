function elementosRepetidos(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequent;

    for (let item of arr) {
        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }
    return mostFrequent
}

let arr = [12, 2, 1, 23, 12, 55, 12, 5, 12]

console.log(elementosRepetidos(arr))