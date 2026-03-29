arr = [3, 7, 2, 9, 4];
let max=arr[0]
for (i = 0; i < arr.length; i++){
    if (max < arr[i]) {
        max=arr[i]
    } else {
        continue
    }
}
console.log(max)