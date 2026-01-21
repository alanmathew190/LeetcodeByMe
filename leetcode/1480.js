var runningSum = function (nums) {
  let arr = [];
  arr[0] = nums[0];
  let sum = arr[0];
  for (i = 1; i < nums.length; i++) {
      sum +=nums[i]
      
      arr.push(sum);
     
  }
  return arr;
};

console.log(runningSum([1, 2, 3, 4]));