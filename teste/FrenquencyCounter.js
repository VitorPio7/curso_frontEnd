// function sameFrequency(arr1, arr2) {
//     let ar1 = arr1.toString();
//     let ar2 = arr2.toString();
//     let obj1 = {};
//     for (let i = 0; i < ar1.length; i++) {
//         let num = ar1[i];
//         if (!obj1[num]) {
//             obj1[num] = 1
//         } else {
//             ++obj1[num];
//         }
//     }
//     for (let i = 0; i < ar2.length; i++) {
//         let num = ar2[i];
//         if (!obj1[num]) {
//             return false;
//         } else {
//             obj1[num] -= 1
//         }
//     }
//     return true;
// }

/*Another resolution */
function sameFrequency(arr1, arr2) {
    let ar1 = arr1.toString()
    let ar2 = arr2.toString()
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < ar1.length; i++) {
        let num = ar1[i];
        if (!obj1[num]) {
            obj1[num] = 1
        } else {
            ++obj1[num]
        }
    }
    for (let i = 0; i < ar2.length; i++) {
        let num = ar2[i];
        if (!obj2[num]) {
            obj2[num] = 1
        } else {
            ++obj2[num]
        }
    }
    for (key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        } else {
            return true
        }
    }

}




console.log(sameFrequency(182, 281))
