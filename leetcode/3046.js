var isPossibleToSplit = function (nums) {
  // make an array of size 101 (since nums[i] ranges from 1 to 100)
  let freq = new Array(101).fill(0);

  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]]++;

    // if any number appears 3 or more times → not possible
    if (freq[nums[i]] >= 3) {
      return false;
    }
  }

  return true;
};
console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));
