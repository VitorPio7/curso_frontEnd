function recursiveRange(num) {
    if (num === 1) {
        return 1
    }
    return num + recursiveRange(num - 1); /*4+recursiveRange(4-1) 10  */
    ///////////////////////////////////////////*3+recursiveRange(3-1) 6 */
    ///////////////////////////////////////////*2+recursiveRange(2-1) 3  */ 
}

console.log(recursiveRange(4))