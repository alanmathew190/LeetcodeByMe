function isRepeating(arr) {
    let newArr = new Set(arr)
    if (newArr.size !== arr.length) {
        return true
    }
    return false
}

console.log(isRepeating([1,2,3,4,1]))

