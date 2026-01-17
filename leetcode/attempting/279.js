

var numSquares = function (n) {
  let squares = [];
  let sum=0
  for (i = 1; i*i <=n; i++) {
    squares.push(i * i);
  }
  for (i = n - 1; i >= 1; i--){
    while(sum <= n) {
      sum += squares[i]
    } if (sum > n) {
      continue
    }
    else break
    
  }
  return sum;

};
console.log(numSquares(14))