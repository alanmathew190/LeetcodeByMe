// Longest Substring with At Most K Distinct Characters

// s = "eceba";
// k = 2;

// let left = 0
// let maxfreq=0
// let maxlen = 0
// let freq = {}
// let distinct=0

// for (let right = 0; right < s.length; right++){
//     let ch = s[right]
    
//     if (freq[ch] == undefined) {
//         freq[ch] = 1
//         distinct++
//     }
//     else {
//         freq[ch]++
//     }
    
//     while (distinct>k) {
//         freq[s[left]]--
       

//         if (freq[s[left]] === 0) {
//             distinct--
//         }
//          left++;
//     }
//     maxlen=Math.max(maxlen,right-left+1)
// }
// console.log(distinct)
// console.log(maxlen)
// console.log(freq)
// s = "eceba";
// k = 2;

// let left = 0
// let freq = {}
// let distinct = 0
// let maxlen = 0

// for (let right = 0; right < s.length; right++){
//     let ch = s[right]
    
//     if (freq[ch] == undefined) {
//         distinct++
//         freq[ch]=1
//     }
//     else {
//         freq[ch]++
//     }
//     while (distinct > k) {
//         freq[s[left]]--

//         if (freq[s[left]] == 0) {
//             distinct--
//         }
//         left++
//     }
//     maxlen=Math.max(maxlen,right-left+1)
// }

// console.log(maxlen)

s = "aaabbcc";
k = 2;
let freq={}
let left = 0
let distinct=0
let maxlen=0
for (right = 0; right < s.length; right++){
    let ch = s[right]
    
    if (freq[ch] == undefined) {
        freq[ch] = 1
        distinct++
    }
    else {
        freq[ch]++
    }

    while (distinct > k) {
        freq[s[left]]--
      
        if (freq[s[left]] == 0) {
            distinct--
        }
          left++;
    }
    maxlen=Math.max(maxlen,right-left+1)
}

console.log(maxlen)