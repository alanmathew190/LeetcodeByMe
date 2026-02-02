var countGoodSubstrings = function (s) {
  let left = 0;
  let count = 0;
  let k = 3;
  let freq = {};
  let distinct = 0;
  for (let right = 0; right < s.length; right++) {
    let ch = s[right];
    if (freq[ch] === undefined) {
      freq[ch] = 1;
      distinct++;
    } else {
      freq[ch]++;
    }
    if (right - left + 1 > k) {
     
      freq[s[left]]--;
      if (freq[s[left]] === 0) {
        distinct--;
      }
      left++;
      }
      if (right - left + 1 == k && distinct === k) {
           count++
       }
  }
  return count;
};
console.log(countGoodSubstrings("aababcabc"));
