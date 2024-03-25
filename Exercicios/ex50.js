// function receberString(string) {
//     let inverter = ""
//     for (let i = string.length - 1; i >= 0; i--) {
//         inverter += string[i]
//     }
//     return inverter
// }

function receberString(string) {
    return string.split("").reverse().join("")
}

console.log(receberString("Vitor"))