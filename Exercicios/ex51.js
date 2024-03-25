function fatorial(num) {
    let cont = 0
    let mult = 1;
    while (num > cont) {
        mult *= num
        num--;
    }
    return mult


}

console.log(fatorial(5))