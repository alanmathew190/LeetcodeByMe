var removeTrailingZeros = function (num) {
let len = num.length;

for (let i = 1; i <= len; i++) {
  if (num.charAt(len - i) == 0)
    num = num.slice(0, len - i);
  else break;
}
return num;
};

console.log(removeTrailingZeros("51230100"))
