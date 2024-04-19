function enumerar(lista) {
    return lista.map((el, index) => ` ${index + 1}. ${el}`).join(',')
}

console.log(enumerar(['maçã', 'banana', 'uva']))