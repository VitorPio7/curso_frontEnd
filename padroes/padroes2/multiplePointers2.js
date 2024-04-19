function isSubsequence(s1, s2) {
    var i = 0;
    var j = 0;
    if (!s1) {
        return true;
    }
    while (j < s2.length) {
        if (s2[j] === s1[i]) {
            i++;
        }
        if (i === s1.length) {
            return true;
        }
        j++;
    }
    return false
}
/*encontrar o padrao de palhas em ordem */

console.log(isSubsequence('hello', 'hello world'))