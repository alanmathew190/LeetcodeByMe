var minOperations = function (boxes) {
    let arr = boxes.split("")
    let result = []
    let count=0
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == 1) {
                count += Math.abs(i - j);
            }
            else continue
        }
         result.push(count);
        count=0
    }
    return result
};


console.log(minOperations("001011"));