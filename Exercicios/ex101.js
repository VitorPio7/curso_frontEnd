function arrNum(arr) {
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((el, index) => el + index, 0)
}
let arrayNum = [1, 2, 3, 4, 1, 5, 4,]

console.log(arrNum(arrayNum))