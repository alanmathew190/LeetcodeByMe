

var numSquares = function (n) {
  let squares = [];
  for (i = 1; i *i<=n; i++) {
    squares.push(i * i);
  }

};
console.log(numSquares(5))