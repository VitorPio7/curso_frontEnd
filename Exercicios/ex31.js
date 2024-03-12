// function buscabinaria(num) {
//     var adivinhar = Math.round(Math.random() * 100)
//     if (adivinhar === num) {
//         console.log(`Você ganhou!!!\nO número adivinhado foi: ${adivinhar} e o seu foi ${num}`)
//     } else {
//         console.log(`Você perdeu!!!\nO número adivinhado foi: ${adivinhar} e o seu foi ${num}`)
//     }

// }

// console.log(buscabinaria(50))


let min = 1;
let max = 100;
let chute = Math.floor((max + min) / 2);
let numeroPensado = 50;

while (chute !== numeroPensado) {
    if (chute > numeroPensado) {
        max = chute;
    } else {
        min = chute;
    }
    chute = Math.floor((max + min) / 2);
}
console.log("O número pensado é:" + chute)