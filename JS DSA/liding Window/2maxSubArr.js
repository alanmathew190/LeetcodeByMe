arr = [2, 1, 5, 1, 3, 2];
k=3
let result = []
let sum = 0
let max = 0

for (i = 0; i<k; i++){
    sum += arr[i]
    max=sum
}
for (i = k; i < arr.length; i++){
    sum = sum - arr[i - k] + arr[i]
    if (sum > max) {
        max=sum
    } else {
        continue
    }
}

console.log(max)



