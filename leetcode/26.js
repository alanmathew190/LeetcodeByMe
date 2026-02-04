var removeDuplicates = function (nums) {
  let freq = {};
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    let ch = nums[i];

    if (freq[ch] === undefined) {
      freq[ch] = 1;
      count++;
    } else {
      freq[ch]++;
    }
    if (nums[i] == nums[i + 1]) {
      nums[i] = Infinity;
    }
  }

    nums.sort((a, b) => a - b);
    console.log(nums)
  return count;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
