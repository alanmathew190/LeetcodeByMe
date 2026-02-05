var secondHighest = function (s) { 
    let arr = []
    let freq={}
for (i = 0; i < s.length; i++) {
  let ch = s[i];

  if (freq[ch] === undefined && s[i] >= "0" && s[i] <= "9") {
    freq[ch] = 1;
    arr.push(Number(ch));
  } else {
    freq[ch]++;
  }
    }
    arr.sort((a,b)=>a-b)
    if (arr.length == 1) return arr[0];
    console.log(arr)
   return arr[arr.length-2]
};
console.log(secondHighest("dfa12321afd"));
