


var smallerNumbersThanCurrent = function (nums) {
  return nums.map((num) => {
    let count = 0;
    for (i = 0; i < nums.length; i++){
      if (nums[i] < num)
        count++
    }
      return count;
  })

};
 console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));


