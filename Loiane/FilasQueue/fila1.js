export { Queue }
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        } else {
            return this.items[this.lowestCount];
        }
    }
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    size() {
        return this.count - this.lowestCount;
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString
    }

}

let filas = new Queue();
filas.enqueue(23)
filas.enqueue(21)
filas.enqueue(47)
filas.dequeue()

console.log(filas.toString())
