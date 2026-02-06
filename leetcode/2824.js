var countPairs = function (nums, target) {
    let i = 0
    let j = 1
    let count = 0
    while(i<nums.length){
        if (nums[i] + nums[j] < target) {
            count++
            j++
        }
        else {
            j++
        }
        if (j > nums.length - 1) {
            i++
            j=i+1
        }
    }
    return count
};
console.log(countPairs([-6,2,5,-2,-7,-1,3], -2));