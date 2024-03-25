const _items = Symbol('stackItems');
class Stack {
    constructor() {
        this[_items] = [] /*não pode ser alterado, pois o Symbol é imutável */
    }
}

class Stack {
    constructor() {
        this._count = 0;/**chave do objeto */
        this._items = {}
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count;
    }
    size() {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        } else {
            this.count--;
            const result = this.items[this.count]
            delete this.items[this.count]
            return result
        }
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.items = {};
        this.count = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack.items)