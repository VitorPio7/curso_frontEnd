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

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; // {7}
    }
    return baseString;
}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))