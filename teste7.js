// var findMedianSortedArrays = function (nums1, nums2) {
//     for (let i = 0; i < nums1.length; i++) {
//         nums2.push(nums1[i])
//     }
//     let organizar = nums2.sort();
//     let fim = organizar.length - 1;
//     let inicio = 0;
//     let meio = Math.floor((inicio + fim / 2))
//     if (nums2.length % 2 === 0) {
//         return (nums2[meio] + nums2[meio + 1]) / 2
//     } else {
//         return nums2[meio]
//     }
// };

// console.log(findMedianSortedArrays([3], [-2, -1]))/*[-2,-1,3] */


let arr = [-2, 3, -1];

console.log(arr.sort((a, b) => a - b))