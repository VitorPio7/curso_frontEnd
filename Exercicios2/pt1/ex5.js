// function fib(n) {
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2); /*fib(4-1)+fib(4-2)
//     /////////////////////////////////*fib(3-1)+fib(3-2) *//*1 +1 */
// }

// /*1,1,2,3,5,8 */

// console.log(fib(4))

function fib(sequence) {
    let a = 1;
    let b = 1;
    var c;
    let str = a + ' ' + b + ' '
    for (let i = 0; i < sequence - 2; i++) {
        c = a + b;
        a = b;
        b = c;
        str += c + ' '
    }
    return str
}

console.log(fib(6))