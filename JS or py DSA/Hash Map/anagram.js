s = "anagram";
t = "nagaram";
let freqS={}
let freqT = {};

for (let i = 0; i < s.length; i++){
    let ch = s[i]
    
    if (freqS[ch] === undefined) {
        freqS[ch]=1
    } else {
        freqS[ch]++
    }
}
for (let i = 0; i < t.length; i++){
    let ch = t[i]
     if (freqS[ch] === undefined) {
         console.log(false)
         return
    }
    freqS[ch]--
    if (freqS[ch] < 0) {
        console.log(false)
        return
    }
    
}
console.log(true)
