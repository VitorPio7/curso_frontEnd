function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }
    var length = 0;
    var head = null;

    this.append = function (element) {
        //adiciona um elemento no final da lista
        var node = new Node(element)
        current
        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current = current.next
        }
        length++

    }
    this.insert = function (position, element) {
        //adiciona um elemento em uma posição especifica
    }
    this.removeAt = function (position) {
        //remove um elemento de uma posição especifica
    }
    this.remove = function (element) {
        //remove o elemento element
    }
    this.indexOf = function (element) {
        //retorna a posição do elemento
    }
    this.isEmpty = function (element) {
        //retorna se esta vazia ou não a instancia
    }
    this.size = function () {
        //retorna o tamanho da instância
    }
    this.toString = function () {
        //converte em string
        var current = head,
            string = ''
        while (current) {
            string += current.element + ' '
            current = current.next
        }
        return string;
    }
    this.print = function () {
        //imprime no console
        console.log(this.toString())
    }
}

var li = new LinkedList();
li.append('João')
li.append('José')
li.append("joão")