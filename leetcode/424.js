var characterReplacement = function (s, k) {
    freq = {}
    let maxlen = 0
    let left = 0
    let maxfreq = 0
    
    for (let right = 0; right < s.length; right++){
        let ch = s[right]
        if (freq[ch] === undefined) {
            freq[ch]=1
        } else {
            freq[ch]++
        }
        maxfreq = Math.max(freq[ch], maxfreq)
        console.log(maxfreq)
        while ((right - left) + 1 - maxfreq > k) {
            freq[s[left]]--

           left++
        }
          maxlen = Math.max(maxlen, right - left + 1);
    }
    return maxlen
};
console.log(characterReplacement("AABABBA",1))