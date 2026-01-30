// s = "leetcode";
s = "loveleetcode";

let freq = {}

for (let right = 0; right < s.length; right++){
    let ch = s[right]
    
    if (freq[ch] === undefined) {
        freq[ch] = 1
    }
    else {
        freq[ch]++
    }

}
for (i = 0; i < s.length; i++){
    if (freq[s[i]] == 1) {
        console.log(i)
        return
    }
}
console.log(-1)