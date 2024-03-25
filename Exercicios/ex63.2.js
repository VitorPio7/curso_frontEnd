function primosAteN(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

function numArray(num) {
    let array = []
    for (let i = 2; i < num; i++) {
        if (primosAteN(i)) {
            array.push(i)
        }
    }
    return array
}

console.log(numArray(7))