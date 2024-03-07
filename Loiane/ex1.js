
// var num = 4;

// console.log("num: " + num)/*esse concatena tudo em uma única string */
// console.log("num: ", num)/*permite visualizar o conteudo da variavel caso ela seja obj */
// console.log('~5:', (~5))

// console.log("-----------------------------------------------------------")

// var myObj = { name: 'John', age: 21 };
// delete myObj.name;
// console.log(myObj)

// console.log("-----------------------------------------------------------")

console.log('packt' == true)

console.log("-----------------------------------------------------------")

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function () {
        console.log(this.isbn)
    }
}

var book = new Book('title', '2342', 'isbn')
book.title = "new title"
