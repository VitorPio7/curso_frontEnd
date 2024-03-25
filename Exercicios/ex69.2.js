function repetirString(num, callback) {
    for (let i = 1; i <= num; i++) {
        callback(i)
    }
}

let call = (i) => console.log(`Chamada ${i}`)

console.log(repetirString(5, call))
