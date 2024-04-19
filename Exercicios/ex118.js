function sum(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    return soma

}


function sum2(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    return arr[0] + sum2(arr.slice(1));
}
console.log(sum2([4, 5, 6, 22]))

let somar = (arr) => arr.reduce((el, index) => el + index);
console.log(somar([4, 5, 6, 22]))