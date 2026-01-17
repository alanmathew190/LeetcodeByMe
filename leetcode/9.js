
var isPalindrome = function (x) {
    let str=x.toString();

let len=str.length;
    let len2 = Math.ceil(len / 2);
        for (let i = 0; i < len2; i++) {
            if (str[i] != str[len - 1 - i]) {
                return false;
            }
            else return true;
    }
    

};
console.log(isPalindrome(1000021))