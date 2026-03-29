let arr = [10, 4, 8, 3];
let result = [];

result[0] = 0;

for (let i = 1; i < arr.length; i++) {
  result[i] = result[i - 1] + arr[i - 1];
}

console.log(result);
