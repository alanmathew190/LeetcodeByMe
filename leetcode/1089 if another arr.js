var duplicateZeros = function (arr) {
    let arr1=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr1.length < arr.length) {
            if (arr[i] == 0) {
                arr1.push(0)
            }
            arr1.push(arr[i])
        }
    }
    arr = arr1
    console.log(arr)
   
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));