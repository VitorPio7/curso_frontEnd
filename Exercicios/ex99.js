function arrRetornar(arr) {
    let nvArray = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            nvArray.push([arr[i], arr[j]])
        }
    }
    return nvArray
}

let array = [1, 2, 3, 4]
console.log(arrRetornar(array))//[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]