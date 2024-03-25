let precos = [29.90, 12.50, 7.65, 2.5, 3.75, 2.98]
let newPrecos = precos.map((el) => el * 1.1).reduce((el, index) => el + index)

console.log(newPrecos)