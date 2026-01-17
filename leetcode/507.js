

var checkPerfectNumber = function (num) {
    if(num<=1) return false
    let add=0
    for (i = 0; i <= num/2; i++){
        if (num % i === 0) {
            add+=i
        }
    }
    return add === num
};

console.log(checkPerfectNumber(28))