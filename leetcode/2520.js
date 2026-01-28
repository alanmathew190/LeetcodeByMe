var countDigits = function (num) {
let count =0 
    let s = num.toString().split("")
    for(i=0;i<s.length;i++){
        if (num % Number(s[i]) == 0) {
          count++
      }
    }
    return count
};

console.log(countDigits(7))