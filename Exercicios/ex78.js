let cachorro = {
    raca: "pé duro",
    nome: "Barão",
    idade: 7,
    print: function () {
        console.log(`O nome do cachorro é ${this.nome} e de raça ${this.raca} e tem ${7 * this.idade}`)
    }
}

cachorro.print()