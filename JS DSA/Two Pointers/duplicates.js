arr = [1, 1, 2, 2, 3, 4, 4];

let slow = 0

for (let fast = 0; fast < arr.length;fast++){

    if (arr[slow] !== arr[fast]) {
        slow++
        arr[slow] = arr[fast];
    }
    
    
}
console.log(slow+1)