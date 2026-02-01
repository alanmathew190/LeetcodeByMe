var lengthOfLongestSubstring = function (s) {
    let freq = {}
    let left = 0
    let maxlen=0
    for (let right = 0; right < s.length; right++){
        let ch = s[right]
        if (freq[ch] === undefined) {
            freq[ch]=1
        } else {
            freq[ch]++
        }
        while (freq[ch] > 1) {
            freq[s[left]]--
            left++
        }
        maxlen=Math.max(maxlen,right-left+1)
    }
    return maxlen
};

console.log(lengthOfLongestSubstring("pwwkew"));