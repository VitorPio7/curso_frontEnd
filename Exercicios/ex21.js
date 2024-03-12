function estacao(num) {
    if (num > 3 && num <= 6) {
        console.log("Outono")
    } else if (num > 6 && num <= 9) {
        console.log("Inverno")
    } else if (num > 9 && num <= 12) {
        console.log("Primavera")
    } else {
        console.log("Verão")
    }
}

console.log(estacao(2))

