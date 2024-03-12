
let numero = 10;
let binario = "";

do {
    binario = (numero % 2) + binario;
    numero = Math.floor(numero / 2)
} while (numero > 0)

console.log(binario)