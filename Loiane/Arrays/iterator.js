let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
/*--------------------------------------------------------------*/
let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value);/*entries devolve o valor */

/*--------------------------------------------------------------*/
let entries = numbers.entries()

console.log(entries.next().value)/*vai devolvee chave e valor */

/*--------------------------------------------------------------*/
let akeys = numbers.keys();

console.log(akeys.next())/*vai devolver a chave e quando não tiver mais retorna "done" e undefined como chave*/
/*--------------------------------------------------------------*/
let aValue = numbers.values();

console.log(aValue.next());/*devolve o valor e se não tiver mais devolve "false" */
/*--------------------------------------------------------------*/
let evens = Array.from(numbers, x => (x % 2 == 0));/*criou um novo array caso o numero seja true ou false */
console.log(evens)
/*--------------------------------------------------------------*/
let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);/*vai criar um array com esses elementos é a mesma coisa que  numbersCopy = [1,2,3,4,5,6] */
numbersCopy.fill(0)/**vai preencher todos os elementos do Array com 0 */
numbersCopy.fill(2, 1)/*Todos os elementos são colocados como 2 apartir do indice 1 */
numbersCopy.fill(1, 3, 5)/*preenche do numero tres ao 5(nãi incluso) */
console.log(numbersCopy)
/*------------------------------------------------------------ */
let ones = Array(6).fill(1) /**O elemento com 6 indices e preenchido com o num 1 */
