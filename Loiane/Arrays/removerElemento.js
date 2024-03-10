
let numbers = [-1, 0, 1, 2, 15, 35, 25, 10, 11, 12, 13]/*O tamanho do array vai continuar o mesmo e o ultimo elemento vai ser undefined
// pois removemos o primeniro elemento e ele vai ser arrastado para o lado */

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i + 1]
// }

// numbers.shift() /*Vai remover o ultimo elemento e vai deixar o tamanho */
// console.log(numbers)

console.log(numbers.splice(5, 3, 2, 3, 4))

