class Stack {
    constructor() {
        this.arr = []
    }
    isEmpty = () => {
        return this.arr.length === 0
    }
    push = (num) => {
        this.arr.push(num)
    }
    pop = () => {
        if (!this.isEmpty()) {
            return this.arr.pop()
        }
    }
    peek = () => {
        if (!this.isEmpty()) {
            return this.arr[this.arr.length - 1]
        }
    }
    size = () => {
        return this.arr.length
    }
    clear = () => {
        return this.arr = []
    }
}


function convertBinario(nBinario) {
    const stack = new Stack();
    let number = nBinario
    let rest;
    let binary = ''

    while (number > 0) {
        rest = Math.floor(number % 2);
        stack.push(rest)
        number = Math.floor(number / 2)
    }
    while (!stack.isEmpty()) {
        binary += stack.pop().toString();
    }
    return binary;
}

console.log(convertBinario(111235))