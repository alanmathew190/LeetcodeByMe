var finalValueAfterOperations = function (operations) {
  let sum = 0;
 
  for (i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i]=== "++X") {
        sum++;
        continue
    } else {
        sum--;
        continue
      }
    
    }
    return sum;
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]));