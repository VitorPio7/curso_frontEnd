function fiboNacci(num) {
    let num1 = 0;
    let num2 = 1;
    for (let i = 2; i <= num; i++) {
        let proximo = num1;
        num1 = num2
        num2 = proximo + num2
    }
    return num2;

}
console.log(fiboNacci(5))