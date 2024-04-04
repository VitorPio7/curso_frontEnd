function convert() {
    return JSON.parse(dados)
}

let dados = `{"nome":"João","idade":25}`

console.log(convert(dados))