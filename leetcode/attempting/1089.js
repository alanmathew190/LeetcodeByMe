var duplicateZeros = function (arr) {
    let arr1=[]
    for (let i = 0; i < arr.length; i++){
        arr1.push(arr[i])
    }
    let len=arr1.length
    let r=0
console.log(arr1)
    for (i = 0; i < len; i++){
        if (arr1[i] == 0) {
            arr[r+1] = 0
            r++
            len--
        }
        arr[r]=arr1[i]
        r++
    }
    console.log(arr)
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));