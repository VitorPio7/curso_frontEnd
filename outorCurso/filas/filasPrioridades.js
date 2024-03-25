function Queue() {
    var items = []
    this.enqueue = function (element) {
        //adiciona um nv item
        items.push(element)

    }
    this.dequeue = function () {
        //remove um item
        return items.shift()

    }
    this.front = function () {
        //retorna o primeiro elemento da fila
        return items[0]

    }
    this.isEmpty = function () {
        //verifica se a fila está vazia ou não
        return items.length === 0
    }
    this.size = function () {
        //retorna o tamanho da fila
        return items.length

    }
    this.print = function () {
        //imprimir a fila no console
        console.log(items.toString())
    }
}

function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;

        for (var i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);/*na posicao i ele vai colocar esse elemento e remover nenhum elemento */
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueElement)
        }
        this.dequeue = function () {
            return items.shift()
        }
        this.print = function () {
            for (var i = 0; i < items.length; i++) {
                console.log(items[i].element + ' ' + items[i].priority);
            }
        }
    }
}
var pqueue = new PriorityQueue();
pqueue.enqueue('Carlos', 2);
pqueue.enqueue('Ana', 1);
pqueue.enqueue('Lucas', 1);
pqueue.print()