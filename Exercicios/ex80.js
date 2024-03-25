let estudante = {
    nome: "Vitor Pio",
    notas: [9.5, 8, 6, 5, 9, 7],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        let media = soma / this.notas.length
        return media;
    }
}

console.log(estudante.media())