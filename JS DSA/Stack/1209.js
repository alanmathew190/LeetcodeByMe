var removeDuplicates = function (s, k) {
    let stack = []
    for (let ch of s) {
        if (stack.length && stack[stack.length - 1][0] === ch) {
            stack[stack.length - 1][1]++
                console.log(stack);
        }
        else {
            stack.push([ch, 1])
                console.log(stack);
        }
    
        if (stack[stack.length - 1][1] === k) {
            stack.pop()
        }
    }
    let res = ''
    for (let [ch, count] of stack) {
        res+=ch.repeat(count)
    }
return res
};
console.log(removeDuplicates("pbbcggttciiippooaais", 2));