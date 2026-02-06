var duplicateZeros = function (arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
      arr1.push(arr[i]);
    }
    let j=arr.length-1
    for (let i = arr.length - 1; i >= 0; i--) {
        while (j < i) {
            if (arr1[i] == 0) {
                j--
                arr[j] = 0
                j--
            }
            arr[i]
            j--

        }
    }

  console.log(arr);
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
