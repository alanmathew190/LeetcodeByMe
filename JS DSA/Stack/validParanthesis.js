s = "{[]}";
let stack=[]
for (i = 0; i < s.length; i++){
    if (s[i] == "{" || s[i] == "[") {
        stack.push(s[i])
    } else {
        stack.pop(stack[stack.length])
    }
   
}
