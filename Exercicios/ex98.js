function palavrasFiltro(arr, proibida) {
    return arr.filter((el) => !proibida.includes(el))
}

let arr = ["banana", "maça", "porra", "viado", "chupeta", "maracuja", "goiaba", "caralho"]
let proibidas = ["porra", "viado", "chupeta", "caralho"]

console.log(palavrasFiltro(arr, proibidas))