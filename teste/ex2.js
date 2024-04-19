function IsanaGram(str1, str2) {
    if (str1 === "" || str2 === "") {
        return false
    }
    let obj = {};

    for (let i = 0; i < str1.length; i++) {
        let num = str1[i]
        if (!obj[num]) {
            obj[num] = 1
        } else {
            ++obj[num]
        }
    }
    for (let i = 0; i < str2.length; i++) {
        let num = str2[i];
        if (!obj[num]) {
            return false
        } else {
            obj[num] = -1;
        }
    }
    return true

}

console.log(IsanaGram("dell", "llde"))