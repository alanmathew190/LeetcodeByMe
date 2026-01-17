

var sortString = function (s) { 
    let freq = new Map();
    let result=""
    for (let ch of s) {
        if (freq.has(ch)) {
            freq.set(ch, freq.get(ch) + 1)
        
        } else {
            freq.set(ch, 1)
        }
    }
};

console.log(sortString("aaabbbccc"))