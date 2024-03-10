function threeNumbers(num1, num2, num3) {
    while (num2 < num3) {
        if (num1) {
            console.log(`O numero ${num1} se encontra no intervalo`)
        }
        num2++;
    }
}

console.log(threeNumbers(3, 1, 5))
