function primosAteN(num) {
    let primos = [];
    for (let i = 2; i < num; i++) {
        if (isPrimo(i)) {
            primos.push(i)
        }
    }
    return primos
}

function isPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

console.log(primosAteN(5))

