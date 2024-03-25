
let retangulo = {
    altura: 12,
    largura: 23,

    calcularArea: function () {
        return (this.altura * this.largura) / 2
    }
}

let quadrado = Object.create(retangulo);
quadrado.calcularArea = function () {
    return this.largura * this.altura;
}
quadrado.largura = 5;
quadrado.altura = 5
