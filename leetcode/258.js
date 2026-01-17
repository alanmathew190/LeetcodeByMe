// var addDigits = function (num) {
//     while (num >= 10) {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         num = sum;
//     }
//     return num;
// };
// console.log(addDigits(38))


var addDigits = function (num) {
    while (num >= 10) {
        let sum = 0
        let digits = String(num).split("")
         for (let i = 0; i < digits.length; i++) {
           sum +=Number(digits[i]);
        }
         num = sum; 
  }
  return num;
}

console.log(addDigits(383)); // 5


// let num = 120;
// console.log(typeof(num))
// let digits = String(num).split("");
// console.log(digits)