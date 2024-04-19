function convertValue(obj) {
    const alterarValor = (key, value) => {
        if (key === "idade") {
            value = value + 1
        }
        return value
    }
    return JSON.stringify(obj, alterarValor)
}

const objetoTeste = { nome: "João", idade: 25 };
console.log(convertValue(objetoTeste))