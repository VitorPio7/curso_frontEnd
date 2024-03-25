let circulo = {
    raio: 12,
    areaCirculo: function () {
        return Math.round(Math.PI * Math.pow(this.raio, 2));
    },
    circunCirculo: function () {
        return Math.round(2 * Math.PI * this.raio);
    },
    info: function () {
        console.log(`A área do circulo é ${this.areaCirculo()} e a circunferência é ${this.circunCirculo()}`)
    }
}

circulo.areaCirculo();
circulo.circunCirculo();
circulo.info()
