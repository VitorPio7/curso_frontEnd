function validAnagram(str, str2) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length != str2.length) {
        return false
    }
    let st1 = []
    let st2 = []
    for (let i = 0; i < str.length; i++) {
        st1.push(str[i])
    }
    for (let i = 0; i < str2.length; i++) {
        st2.push(str2[i])
    }
    return st1.sort().toString() === st2.sort().toString()

}

console.log(validAnagram('anagram', 'margana'))