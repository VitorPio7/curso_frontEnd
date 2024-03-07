function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7));
/*------------------------------------------------------- */
var [x, y] = ['a', 'b'];
var obj = { x, y };
console.log(obj)
/*------------------------------------------------------- */

var hello = {
    name: 'abcdef',
    printHello() {
        console.log('Hello');
    }
}
console.log(hello.printHello());