// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i
//     }
//     return total;
// }

function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1);/*é mais rápido do que o primeiro exemplo pois é O(1) */
}

console.log(factorial(4))
