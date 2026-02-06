
var maxNumberOfBalloons = function (text) {
    let freq={}
    for (let i = 0; i < text.length; i++){
        let ch = text[i]
    freq[ch]=(freq[ch]||0)+1
    }
    let b = freq['b'] || 0
    let a = freq["a"] || 0;
    let l = Math.floor(freq['l']/2||0)
    let o = Math.floor(freq["o"] / 2 || 0);
    let n = freq["n"] || 0;
    return Math.min(b,a,l,o,n)
    
};

console.log(maxNumberOfBalloons("nlaebolko"));