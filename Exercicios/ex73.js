function hightOrder(num, callback, valorInicial) {
    let valor = valorInicial;
    let i = 0;
    let interValId = setInterval(() => {
        if (i < callback.lenght) {
            valor = callback[i](valor)
            i++
        } else {
            clearInterval(interValId);
            console.log(valor)
        }
    }, num)
}
let call = [el => el ** el, el => el + el];
let valorInicial = 1;

hightOrder(200, call, valorInicial)