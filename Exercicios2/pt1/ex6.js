// function reverse(str) {
//     let strInvert = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         strInvert += str[i]
//     }
//     return strInvert
// }

function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res
}

console.log(capitalizeWords('awesome'))
