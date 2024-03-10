const idades = [12, 23, 53, 21, 23, 54, 2, 32, 12, 33, 12, 13]
let arrIdades = idades[Symbol.iterator]()

// console.log(arrIdades.next().value)
// let arrIdades2 = idades.entries()
// console.log(arrIdades2.next().value)

console.log(Array.from(idades, x => x >= 18))
let notas = Array(12, 12, 32, 4, 12, 32, 12, 45, 21);
console.log(notas.fill(1, 4))