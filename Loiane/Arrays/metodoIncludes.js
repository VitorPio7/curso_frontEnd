let numbers2 = [7, 6, 5, 4, 3, 2, 1];

console.log(numbers2.includes(4))/**vai retornar true pois possui esse elemento */
console.log(numbers2.includes(5, 4))/**vai retornar false pois não esta nessa ordem */
console.log(numbers2.includes(4, 3))/**vai retornar true pois esta nessa ordem */