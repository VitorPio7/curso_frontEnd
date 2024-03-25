let carro = {
    marca: "Chevrolet",
    modelo: "Celta",
    ano: "2007",
    veloAtual: 0,
    acelerar: function () {
        return this.veloAtual += 10;
    },
    frear: function () {
        if (this.veloAtual < 0) {
            this.veloAtual = 0
        }
        return this.veloAtual -= 10;
    },
    obterVeloAtual: function () {
        return this.veloAtual
    }

};
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
carro.frear();
carro.acelerar()
console.log(carro.obterVeloAtual())