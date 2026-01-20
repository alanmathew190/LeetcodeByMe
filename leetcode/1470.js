var shuffle = function (nums, n) {
    let secArr = nums.slice(n, nums.length);
    let fArr = []
    let pos1 = 0
    let pos2=0
    for (i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            fArr.push(nums[pos1])
             pos1++;
        } else {
            fArr.push(secArr[pos2])
            pos2++
      }
    }
 return fArr
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));