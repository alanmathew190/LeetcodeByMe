
var minCostToMoveChips = function (position) {
  let odd = 0;
  let even = 0;

  for (let p of position) {
    if (p % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  return Math.min(odd, even);
};

console.log(minCostToMoveChips([1, 2, 4, 5, 5, 8]))


