// function hightOrder(callback, value) {
//     let nvarray = []
//     for (let i = 0; i < callback.length; i++) {
//         callback[i] = callback[i](value)
//     }
//     for (let i = callback.length - 1; i >= 0; i--) {
//         nvarray.push(callback[i])
//     }
//     return nvarray

// }

function hightOrder(callback, number) {
    return callback.reverse().map(callback => callback(number));
}


let call = [(el) => el * 2, (el) => el ** 2, (el) => el ^ 2, (el) => el / 2];
let number = 2;

console.log(hightOrder(call, number));





