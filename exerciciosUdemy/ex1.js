function sameFrequency(num1, num2) {
    let n1 = num1.toString()
    let n2 = num2.toString()
    if (n1.length !== n2.length) {
        return false
    } else {
        let arr1 = []
        let arr2 = []
        for (let i = 0; i < n1.length; i++) {
            arr1.push(parseInt(n1[i]))
        }
        for (let j = 0; j < n2.length; j++) {
            arr2.push(parseInt(n2[j]))
        }
        return arr1.sort((a, b) => a - b).toString() === arr2.sort((a, b) => a - b).toString()
    }
}

