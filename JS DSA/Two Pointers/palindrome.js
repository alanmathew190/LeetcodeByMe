let s = "racecar";

left = 0
right = s.length - 1

while (left < right) {
    if (s[left] !== s[right]) {
        console.log(false)
        return
    }
    left++
    right--
}
console.log(true)