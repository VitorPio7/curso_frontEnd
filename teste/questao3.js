function inverter(str) {
    let palavraInvertida = ""
    for (let i = str.length - 1; i >= 0; i--) {
        palavraInvertida += str[i]
    }
    return palavraInvertida
}

console.log(inverter("palavra"))