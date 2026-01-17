// var replaceElements = function (arr) {
//     let len = arr.length;

//     for (i = 0; i < len; i++) {
//       let temp = -1;
//       for (j = i + 1; j < len; j++) {
//         if (arr[j] > temp) {
//             temp = arr[j];
//             arr[i] = temp;
//         }
//       }
//     //   arr[i] = temp;
//     }
//     arr[len-1]=-1
//     console.log(arr);
// };
// replaceElements([17, 18, 5, 4, 6, 1]);

//or

var replaceElements = function (arr) {
  let maxSoFar = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    arr[i] = maxSoFar;
    if (current > maxSoFar) {
      maxSoFar = current;
    }
  }
  return arr;
};
console.log(replaceElements([17, 18, 5, 4, 6, 1])); 


