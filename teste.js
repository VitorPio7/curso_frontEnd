class Stack {
    constructor() {
        this.items = []
    }
    push(valor) {
        this.items.push(valor)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length
    }
    clear() {
        return this.items = [];
    }
}

var stack = new Stack();
stack.push(15)
stack.push(20)

console.log(stack.peek())