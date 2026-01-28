    var findErrorNums = function (nums) {
        nums.sort((a, b) => a - b);
        console.log(nums)
        let dup = 0
        let n=0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] ==nums[i+1]) {
            dup= nums[i]
        }
        if (nums[i] != i + 1) {
            n=i+1
        }
        }
        return [dup,n]
    };

console.log(findErrorNums([4, 8, 1, 5, 2, 7, 4, 6]));