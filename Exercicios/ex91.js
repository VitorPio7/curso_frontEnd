function ordenarSring(str) {
    return str.sort((a, b) => b.length - a.length)
}

let nomes = ["Vagner", "Vitor", "Tais", "Marinalva", "Valmirdasverduras"]


console.log(ordenarSring(nomes))