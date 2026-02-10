var removeKdigits = function (num, k) {
    let stack = []
    
    for (let digit of num) {
        while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
            stack.pop()
            k--
        }
        stack.push(digit)
    }
     while (k > 0) {
       stack.pop();
       k--;
     }
    let res = stack.join("").replace(/^0+/, "");
    return res===""?0:res

};
console.log(removeKdigits("1432219", 3));
