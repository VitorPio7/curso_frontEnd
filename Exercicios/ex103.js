function concat(dateFormat) {
    return JSON.stringify(dateFormat)
}

let json = { nome: "joão", idade: 25 }

console.log(concat(json))