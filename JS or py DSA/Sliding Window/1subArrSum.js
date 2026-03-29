let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

let result = [];
let sum = 0;

// first window
for (let i = 0; i < k; i++) {
  sum += arr[i];
}

result.push(sum);

// slide window
for (let i = k; i < arr.length; i++) {
  sum = sum - arr[i - k] + arr[i];
  result.push(sum);
}

console.log(result);
