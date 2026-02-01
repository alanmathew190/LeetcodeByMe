var checkInclusion = function (s1, s2) {
    let freqS1 = {}
    let missing = s1.length
    let left=0
    if (s1.length > s2.length) return false
    
    for (let ch of s1) {
        freqS1[ch]=(freqS1[ch]||0)+1
    }
    for (right = 0; right < s2.length; right++){
        let ch=s2[right]
        if (freqS1[ch] > 0) {
            missing--
        }
        freqS1[ch] = (freqS1[ch] || 0) - 1
        
         if (right - left + 1 > s1.length) {
           if (freqS1[s2[left]] >= 0) {
             missing++;
           }
           freqS1[s2[left]]++;
           left++;
        }
        if(missing===0)return true
    }
   return false

};

console.log(checkInclusion("ab", "eidbaooo"));