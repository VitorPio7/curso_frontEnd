function filtrarEConverter(obj) {
    return JSON.stringify(obj, ['nome', 'idade']);
}

const objetoTeste = { nome: "joão", senha: "1,2,3,4,5", idade: 25 }
console.log(filtrarEConverter(objetoTeste))

