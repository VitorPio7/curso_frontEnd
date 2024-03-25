class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1]/**devolve o ultimo elemento sem alterar */
    }
    isEmpty() {
        return this.items.length === 0; /**vai ver se o conteudo esta vazio */
    }
    size() {
        return this.items.length; /**vai retornar o tamanho do array */
    }
    clear() {
        this.items = [];
    }
}


function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) { // {1}
        rem = Math.floor(number % 2); // {2}
        remStack.push(rem); // {3}
        number = Math.floor(number / 2); // {4}
    }
    while (!remStack.isEmpty()) { // {5}
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(decimalToBinary(233))