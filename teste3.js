function fraseIqual(word1, word2) {
    let obj = {}
    if (word1.length !== word2.length) {
        return false
    } else {
        for (let i = 0; i < word1.length; i++) {
            if (!obj[i]) {
                obj[i] = 1
            } else {
                obj[i] += 1
            }
        }
        for (let i = 0; i < word2.length; i++) {
            if (!obj[i]) {
                return false
            } else {
                obj[i] = -1
            }
        }
        return true
    }
}
console.log(fraseIqual('anagram', 'margana'))