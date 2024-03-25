function Queue() {
    let arr = [];
    this.enqueue = function (element) {
        arr.push(element);
    }
    this.dequeue = function () {
        return arr.shift();
    }
    this.front = function () {
        return arr[0];
    }
    this.isEmpty = function () {
        return arr.length === 0;
    }
    this.size = function () {
        return arr.length;
    }
    this.print = function () {
        console.log(arr.toString())
    }
}

let filas = new Queue();
filas.enqueue("Vitor Pio Vieira");
filas.enqueue("Vagner Pio Vieira");
filas.enqueue("Marinalva Pio Vieira");

filas.print()