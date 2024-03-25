function maior(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `O ${num1} é o maior número`
    } else if (num2 > num1 && num2 > num3) {
        return `O ${num2} é o maior número`
    } else if (num1 === num2 && num2 === num3) {
        return `Os números são iguais`
    } else {
        return `O ${num3} é o maior número`
    }
}

console.log(maior(13, 13, 13))