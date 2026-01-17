
var checkIfExist = function (arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] == arr[j] * 2) {
        return true;
      }
    }
  }
  return false;
};
console.log(checkIfExist([3, 1, 7, 11]));