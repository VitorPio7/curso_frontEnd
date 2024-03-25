let obj = {
    nome: "O capital 1",
    autor: "Karl Marx",
    numPag: 1200,
    print: function () { console.log(`O livro ${this.nome} com o autor ${this.autor} tem ${this.numPag} páginas`) }
};

obj.print()


