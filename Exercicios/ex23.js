function semaforo(cor) {
    var cores = cor.toLowerCase()
    if (cores === "verde") {
        console.log("pode passar!")
    } else if (cores === "vermelho") {
        console.log("parar!")
    } else if (cores === "amarelo") {
        console.log("Espere!")
    } else {
        console.log(`A cor ${cores} não pertence ao semáforo`)
    }
}

console.log(semaforo("Verde"))