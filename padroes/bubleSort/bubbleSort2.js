function bubbleSort2(arr) {
    for (let i = arr.length - 1; i >= 0; i--) { /* i = 3; i>=0; i-- */
        for (let j = 0; j <= i - 1; j++) {/*j = 2; j <= 2; j++ */
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                let ar = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = ar
            }
        }
        console.log("ONE PASS COMPLETE!")
    }
    return arr
}

console.log(bubbleSort2([37, 45, 29, 8]))

// function bubbleSort2(arr) { /*esse codigo é menos otimizado pois ele compara até o proximo o ultimo indice (undefined) */
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort2([6, 4, 15, 10, 8, 9, 4]))