let arrPar = [2, 4, 6, 8, 10, 12, 14]
let arrImpar = [1, 3, 5, 7, 9, 11, 13]

let newArr = arrPar.concat(arrImpar)



console.log(newArr.filter((el) => el % 5 == 0));
