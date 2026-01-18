var getConcatenation = function (nums) {
  let ans = [...nums, ...nums];
  return ans;
};

console.log(getConcatenation([1,2,3]))