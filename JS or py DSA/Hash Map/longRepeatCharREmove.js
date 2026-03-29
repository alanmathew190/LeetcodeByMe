s = "AABABBA";
k = 1;

let left = 0;
let freq = {};
let maxfreq = 0;
let maxlen = 0;
for (let right = 0; right < s.length; right++) {
  let ch = s[right];

  if (freq[ch] === undefined) {
    freq[ch] = 1;
  } else {
    freq[ch]++;
  }
  maxfreq = Math.max(maxfreq, freq[ch]);

  while (right - left + 1 - maxfreq > k) {
    freq[s[left]]--;
    left++;
  }
  maxlen = Math.max(maxlen, right - left + 1);
}
console.log(maxlen);

