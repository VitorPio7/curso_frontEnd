function filtrarPara(obj) {
    return JSON.stringify(obj, null, 2)
}

let obj = { "nome": "Vitor", "idade": 22, "gênero": "marculino" }
console.log(filtrarPara(obj))
