let s = "mississippi";
let freq={}

for (i = 0; i < s.length; i++){
    let ch = s[i]
    
    if (freq[ch] === undefined) {
      freq[ch] = 1;
    }
        else {
            freq[ch]++
        }
}
console.log(freq)