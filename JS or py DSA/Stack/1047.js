var removeDuplicates = function (s) {
    let stack = []
    for (i = 0; i < s.length; i++){
        let ch = s[i]
        if ( stack[stack.length-1]!==ch) {
            stack.push(ch)
        }
        else  {
                stack.pop()
            }
        
    }
    return stack.join("")
};
console.log(removeDuplicates("abbaca"));
