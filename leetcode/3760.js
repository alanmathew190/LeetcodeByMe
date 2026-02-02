var maxDistinct = function (s) {
    let freq = {}
    let distinct=0
    for (let right = 0; right < s.length; right++){
        let ch = s[right]
        if (freq[ch] == undefined) {
            freq[ch] = 1
            distinct++
        } else {
            freq[ch]++
        }
    }
    return distinct
};
console.log(maxDistinct("abab"))