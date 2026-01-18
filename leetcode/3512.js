var minOperations = function (nums, k) {
  let count = 0;
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  while (sum % k !== 0) {
    sum -= 1;
    count += 1;
  }
  return count;
};
