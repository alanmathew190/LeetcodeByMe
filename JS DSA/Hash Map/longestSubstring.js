
s = "pwwkew";


let left = 0
let freq = {}
let maxlen = 0

for (let right = 0; right < s.length; right++){
    let ch = s[right]
    
    if (freq[ch] == undefined) {
        freq[ch]=1
    }
    else {
        freq[ch]++
    }

    while (freq[ch] > 1) {
        let leftChar = s[left]
        freq[leftChar]--
        left++
    }
    maxlen = Math.max(maxlen, right - left + 1)
  
}
console.log(maxlen)