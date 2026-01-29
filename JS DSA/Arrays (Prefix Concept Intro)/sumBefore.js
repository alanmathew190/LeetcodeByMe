

let arr = [1, 2, 3, 4]
let result = []

result[0]=0

for (i = 1; i < arr.length; i++){
    result.push(result[i-1]+arr[i-1])
}

console.log(result)