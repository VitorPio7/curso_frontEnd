// function factorial(factoral) {
//     let mult = 1
//     for (let i = factoral; i > 0; i--) {
//         mult *= i
//     }
//     return mult
// }

// console.log(factorial(4))

function factoral(fac) {
    if (fac === 0) {
        return 1;
    }
    return fac * factoral(fac - 1)
}

console.log(factoral(7))