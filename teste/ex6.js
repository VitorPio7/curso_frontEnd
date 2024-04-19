function anagrams(s, t) {
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    if (s.length !== t.length) return false;

    for (let val of s) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of t) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}



console.log(anagrams("a", "ab"))