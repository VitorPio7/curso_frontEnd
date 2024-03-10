let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function isEven(x) {
    return x % 2 === 0 ? true : false;
}

console.log(numbers.every(isEven))/**itera todos os elementos até que retorne false */
console.log(numbers.some(isEven))/**itera todos os elementos até que retorne true */
