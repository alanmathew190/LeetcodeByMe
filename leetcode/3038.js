// let arr = [1, 5, 3, 3, 4, 1, 3, 2, 2, 3];

var maxOperations = function (arr) {
    const [first, second] = arr;
    let sum = first + second;
    let count = 1;

    for (let i = 2; i < arr.length; i++) {
      if (arr[i] + arr[i + 1] == sum) {
        i = i + 1;
        count++;
      } else break;
    }
    return count;
};

console.log(maxOperations([1, 1, 1, 1, 1, 1]));
