let array = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// console.log(array.sort((a, b) => a - b))/*vai organizar o array, se usasse o método sort()apenas não iria organizar certo pois leva em consideração que é uma string */
// console.log(array.sort((a, b) => b - a))/*vai colocar em ordem decrescente */

const friends = [{ name: 'John', age: 30 }, { name: 'Ana', age: 20 }, { name: 'Chris', age: 25 }]

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    } if (a.age > b.age) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson))

const names = ['Ana', 'ana', 'john', 'John'];

function ordenar(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}

console.log(names.sort(ordenar))