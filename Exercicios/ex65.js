function arrayNum(num, callback) {
    return num.map(callback).reduce((a, b) => a + b, 0);
}
let numeros = [1, 2, 3, 4, 5];
let callback = num => num * 2;

console.log(somaComCallback(numeros, callback))