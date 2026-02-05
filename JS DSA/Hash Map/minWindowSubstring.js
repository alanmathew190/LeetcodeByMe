

// let freqT = {}
// let left = 0
// let missing = t.length

// for (let tch of t) {
//     freqT[tch]=(freqT[tch]||0)+1
// }
// let minlen = Infinity
// let start=0

// for (let right = 0; right < s.length; right++) {
//   let ch = s[right];

//     if (freqT[ch] > 0) {
//         missing--
//     }
//     freqT[ch]--

//     while (missing === 0) {
//         minlen = Math.min(minlen, right - left + 1)
//         freqT[s[left]]++
//         if (freqT[s[left]] > 0) {
//             missing++
//             start=left
//         }
//         left++
//     }

// }console.log(s.slice(start,start+minlen))
s = "ADOBECODEBANC";
t = "ABC";
let freqt = {};
let minlen = Infinity;
let start = 0;
let missing = t.length;
let left = 0;


for (let tch of t) {
  freqt[tch] = (freqt[tch] || 0) + 1;
}

for (right = 0; right < s.length; right++) {
  let ch = s[right];

  if (freqt[ch] > 0) {
    missing--;
  }
  freqt[ch]--;

  while (missing === 0) {
    minlen = Math.min(minlen, right - left + 1);
      freqt[s[left]]++;
      start=left

    if (freqt[s[left]] > 0) {
      missing++;
    }
    left++;
  }
}
console.log(s.slice(start,minlen+start));