function convertObj(str) {
    return JSON.parse(str)
}

let dados = `{"nome":"Vitor Pio","idade":25}`;

let data = convertObj(dados)

console.log(data.nome)