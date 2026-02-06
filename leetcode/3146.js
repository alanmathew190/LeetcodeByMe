var findPermutationDifference = function (s, t) {
    let pos = {}
    let sum=0
    for (let i = 0; i < s.length; i++){
        let ch = s[i]
        if (pos[ch] === undefined) {
            pos[ch]=i
        }
    }
    console.log(pos)
    console.log(pos["e"])
    for (let i = 0; i < t.length; i++) {
        let ch = t[i]
        console.log(ch)
        let diff=Math.abs(pos[ch]-i)
        sum+=diff
    }
    console.log(sum)
};

console.log(findPermutationDifference("abcde", "edbac"));