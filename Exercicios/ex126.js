function arrMultarguments(...arg) {
    let arr = []
    for (let i = 0; i < arg.length; i++) {
        if (typeof (arg[i]) === "number") {
            arr.push(arg[i])
        }
    }
    return arr
}

console.log(arrMultarguments("Vitor", 22, "Marinalva", 52, "Valmir", 56))