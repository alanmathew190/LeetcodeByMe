var maxFreqSum = function (s) {
    let maxV = 0
    let maxC = 0
    let freq={}
    for (let i = 0; i < s.length; i++){
        let ch = s[i]
        
        if (freq[ch] == undefined) {
            freq[ch]=1
        }
        else {
            freq[ch]++
        }
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            maxV=Math.max(freq[ch],maxV)
        }
        else {
            maxC=Math.max(freq[ch],maxC)
        }
    }
    console.log(maxC)
    console.log(maxV)
return maxC+maxV
};
console.log(maxFreqSum("successes"));