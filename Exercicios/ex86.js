let livro = {
    titulo: "O capital",
    autor: "Karl Marx",
    paginas: 1250,
    info: function () {
        console.log(`${this.titulo}, escrito por ${this.autor}, com ${this.paginas} páginas`);
    }
}

livro.info()