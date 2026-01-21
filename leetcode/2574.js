var leftRightDifference = function (nums) {
    let r = []
    let l = []
    l[0] = r[0] = 0
    let k = 0
    let diff=[]
    for (i = 0; i < nums.length - 1; i++){
        r.push(r[i]+nums[i])
    }
    for (j = nums.length-1; j >0; j--) {
        l.push(l[k] + nums[j]);
        k++
    }
    l.reverse()
    for (k = 0; k < nums.length; k++){
        diff.push(Math.abs(l[k]-r[k]))
    }

  return diff
};

console.log(leftRightDifference([10, 4, 8, 3]));