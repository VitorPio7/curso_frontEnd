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

function convertBinary(num) {
    const stack = new Stack();
    let number = num;
    let resto;
    let binary = '';
    while (number > 0) {
        resto = Math.floor(number % 2);
        stack.push(resto)
        number = Math.floor(number / 2)
    }
    while (!stack.isEmpty()) {
        binary += stack.pop().toString();
    }
    return binary;

}

console.log(convertBinary(1232))