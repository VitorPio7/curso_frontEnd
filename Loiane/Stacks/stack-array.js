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
const stack = new Stack();

stack.push(15)
stack.push(5)
stack.push(8)
console.log(stack.isEmpty());
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop())
console.log(stack.size())
