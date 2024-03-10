function maior(num1, num2, num3) {
    if (num1 > (num2 && num3)) {
        console.log(num1 + " é o maior numero")
    } else if (num2 > (num1 && num3)) {
        console.log(num2 + " é o maior numero")
    } else if (num3 > (num2 && num1)) {
        console.log(num3 + " é o maior numero")
    } else if (num1 == num2 == num3) {
        console.log("São iguais")
    }
}

console.log(maior(2, 3, 5))

