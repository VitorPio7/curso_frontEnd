function implementacaoProfunda(obj) {
    return { ...obj }/*vai criar uma copia profunda do obj */
}

const original = { nome: "Lucas", idade: 20 };
const copia = copiaProfunda(original);
console.log(copia);