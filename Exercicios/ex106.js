// function convertObj(str) {
//     return JSON.parse(str)
// }

// let dados = `{"nome":"Vitor Pio","idade":25}`;

// let data = convertObj(dados)
// Object.assign(data, { "profissão": "dev" })

// console.log(data)

function adicionarPropiedade(jsonStr, chave, valor) {
    const obj = JSON.parse(jsonStr);
    obj[chave] = valor;
    return obj
}

const jsonStringTeste = '{"nome":"João","idade":25}';
console.log(adicionarPropiedade(jsonStringTeste, "profissão", "Engenheiro"))