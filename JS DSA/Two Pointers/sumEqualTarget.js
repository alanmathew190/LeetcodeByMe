arr = [1, 2, 3, 5, 6, 10];
target = 10;

let left = 0
let right = arr.length - 1

while (left < right) {
    if (arr[left] + arr[right] == target) {
        console.log(arr[left], arr[right]);
        return
    }
    else if (arr[left] + arr[right] < target) {
        left++
    } else {
        right--
    }
}
console.log(false)
