function adicionarAoArray(jsonStr, novoObjeto) {
    const arr = JSON.parse(jsonStr);
    arr.push(novoObjeto)
    return arr
}

console.log(adicionarAoArray('[{"nome":"Vitor","idade":25},{"nome":"Maria","idade":30}]'
    , { nome: "Pedro", idade: 22 }))

