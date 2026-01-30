

arr = [2, 3, 1, 2, 4, 3];
k = 7;

let sum = 0
let left = 0
let minLen = Infinity

for (let right = 0; right < arr.length; right++){
    sum += arr[right]

    while (sum >= k) {
        minLen=Math.min(minLen,right-left+1)
        sum -= arr[left]
        left++
    }
}
console.log(minLen)


// Longest subarray with sum ≤ 6
arr = [1, 2, 3, 1, 1, 1, 1];
k = 6;

let left2 = 0
let sum2 = 0
let maxlen = 0

for (let right = 0; right < arr.length; right++){
    sum2 += arr[right]
    
    while (sum2 > k) {
        maxlen = Math.max(maxlen, right - left2 + 1)
        sum2 -= arr[left2]
        left2++
    }
}
console.log(maxlen)