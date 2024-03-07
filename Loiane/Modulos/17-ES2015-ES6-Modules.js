// import { circle, square } from './17-CalcArea.js'
import * as area from './17-CalcArea.js'
import Book from './17-Book.js'

console.log(area.circle(2))
console.log(area.square(2))

const myBook = new Book('some title')
myBook.printTitle();