export { retangulo }

let retangulo = {
    altura: 12,
    largura: 23,

    areaTriangulo: function () {
        return (this.altura * this.largura) / 2
    }
}

console.log(retangulo.areaTriangulo())