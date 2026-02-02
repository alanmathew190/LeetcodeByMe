var isPalindrome = function (s) {
    
    newS = s
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .split(" ")
      .join("");
   if(newS.length<1) return true
    let left = 0
    let right = newS.length-1
    
    while (left < right) {
        if (newS[left] !== newS[right]) {
         return false
        }
        left++;
            right--
            
        }
            return true
        
    
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))