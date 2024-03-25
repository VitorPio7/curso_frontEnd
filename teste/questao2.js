let numeroEscolhido = 34
let arr = [];
arr[0] = 1;
arr[1] = 1;

for (let i = 2; i < 20; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
}

console.log(arr.includes(numeroEscolhido))