
let num = "12321";
let tamanho = num.length - 1
let inverter = ""
while (tamanho >= 0) {
    inverter += num[tamanho]
    tamanho--;
}
if (inverter === num) {
    console.log("é um palindromo")
} else {
    console.log("Não é um palindromo")
}

console.log(inverter)
