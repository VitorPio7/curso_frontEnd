let obj = {
    saldo: 1785,
    deposito: function (valor) {
        return this.saldo += valor
    },
    saque: function (valor) {
        if (this.saldo <= 0) {
            return "Saldo insuficiente"
        } else {
            return this.saldo -= valor
        }
    },
    saldoAtual: function () {
        return this.saldo
    }
}

console.log(obj.deposito(12));
console.log(obj.deposito(100));
console.log(obj.deposito(50));
console.log(obj.deposito(65));
console.log(obj.saque(100));
console.log(obj.saldoAtual());

