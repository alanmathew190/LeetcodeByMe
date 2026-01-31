arr = [2, 3, 1, 2, 4, 3];
target = 7;


let left = 0
let minlen = Infinity
let sum=0
for (let right = 0; right < arr.length; right++){
    sum += arr[right]
    
    while (sum >= target) {
        minlen = Math.min(minlen, right - left + 1);
        sum -= arr[left]
        left++
    }
    
}
console.log(minlen)