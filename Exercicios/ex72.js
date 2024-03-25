function hightOrder(num, callback, valIn) {
    let valor = valIn;
    for (let i = 0; i < num; i++) {
        callback.forEach(callback => {
            valor = callback(valor)
        })
    }
    return valor
}

let arr = [el => el + el, el => el * el, el => el / 2, el => el ** el]
let valorInicial = 1;

console.log(hightOrder(arr, 5, valorInicial))