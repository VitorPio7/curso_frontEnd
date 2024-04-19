function power(base, expoente) {
    if (expoente === 0) {
        return 1
    }
    return base * power(base, expoente - 1)/* 2 * power(2, 3-1) */    /*  2*4 */
    //////////////////////////////////////////////* 2 * power(2, 2-1) */ /*  2*2 */
}/////////////////////////////////////////////////* 2* power(2, 0) */ /*  2*1  */

console.log(power(2, 3))