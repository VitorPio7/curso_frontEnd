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

function hotPotato(nameList, num) {
    var queue = new Queue()

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }
    var eliminated = '';

    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + ' was eliminated from the Hot Potato game')
    }
}