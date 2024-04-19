/*Algorimo que tem dois ponteiros e descobre dois numeros nas extremidades e ve qual a soma é 0 */


function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))
