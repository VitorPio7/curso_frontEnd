function jogo(jogada) {
    let random = Math.ceil(Math.random() * 3)
    if (random === 1) {
        random = "papel"
    } else if (random === 2) {
        random = "tesoura"
    } else {
        random = "pedra"
    }
    do {
        if (random === "papel" && jogada === "tesoura") {
            console.log("tesoura ganhou!!!")
        } else if (random === "papel" && jogada === "pedra") {
            console.log("papel ganhou!!!")
        } else if (random === "tesoura" && jogada === "papel") {
            console.log("tesoura ganhou")
        } else if (random === "tesoura" && jogada === "pedra") {
            console.log("pedra ganhou")
        } else if (random === "pedra" && jogada === "papel") {
            console.log("papel ganhou")
        } else if (random === "pedra" && jogada === "tesoura") {
            console.log("pedra ganhou")
        } else {
            console.log("empate");
        }
    } while (0 === true);
    console.log(`Sua jogada foi ${jogada} e o computador jogou ${random}`)
}

console.log(jogo("pedra"))