var frequencySort = function (nums) {
//     const freq = new Map();

//     // Count the frequency of each number
//     nums.forEach((num) => {
//       freq.set(num, (freq.get(num) || 0) + 1);
//     });
//         console.log(freq);

//     console.log(freq.get(2))
//   nums.sort((a, b) => {
//     const freqA = freq.get(a);
//     const freqB = freq.get(b);
//     if (freqA !== freqB) {
//       return freqA - freqB; // Sort by frequency
//     } else {
//       return b - a; // Sort by value in decreasing order
//     }
//   });

    //   return nums;
     const freq = {};

     for (let n of nums) {
       freq[n] = (freq[n] || 0) + 1;
    }
    console.log(freq)
console.log(Object.entries(freq));
     const sorted = Object.entries(freq).toSorted((a, b) => {
       if (a[1] === b[1]) return Number(b[0]) - Number(a[0]);
       return a[1] - b[1];
     });
    console.log(sorted)

     const result = [];

     for (let [key, value] of sorted) {
       for (let i = 0; i < value; i++) {
         result.push(Number(key));
       }
     }

     return result;
};
console.log(frequencySort([1, 1, 2, 2, 2, 3]));