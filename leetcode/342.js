var isPowerOfFour = function (n) {
    if (n <= 0) return false;
    return (Math.log(n) / Math.log(4)) % 1 === 0;

};

// console.log(isPowerOfFour(15))

function isPowerOfFour(n) {
  for (let i = 0; Math.pow(4, i) <= n; i++) {
    if (Math.pow(4, i) === n) return true;
  }
  return false;
}
console.log(isPowerOfFour(16));