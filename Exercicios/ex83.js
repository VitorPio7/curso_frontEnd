let tempo = {
    horas: 2,
    minutos: 32,
    segundos: 30,

    toSeconds: function () {
        console.log("O tempo total em segundos é: " + this.segundos + this.minutos * 60 + this.horas * 3600)
    }
}

tempo.toSeconds()