s = "cbaebabacd";
p = "abc";


let left = 0
let freq = {}
let result = []
let freqP = {};

for (let ch of p) {
  freqP[ch] = (freqP[ch] || 0) + 1;
}
console.log(freqP)
for (right = 0; right < s.length; right++){
    let ch = s[right]
    
    if (freq[ch] == undefined) {
        freq[ch]=1
    } else {
        freq[ch]++
    }
    if (right - left + 1 > p.length) {
        freq[s[left]]--
        if (freq[s[left]] === 0) {
            delete freq[s[left]]
        }
        left++
    }
    if (right - left + 1 == p.length) {
        if (isSame(freq, freqp)) {
            result.push(left)
        }
    }

}x


console.log(result)