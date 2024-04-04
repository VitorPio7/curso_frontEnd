function subArray(arrPrincipal, subArray) {
    return arrPrincipal.toString().includes(subArray.toString())
}


let arrPrincipal = [1, 2, 3, 5, 6, 4, 5];
let arrSub = [1, 2, 3];

console.log(subArray(arrPrincipal, arrSub))