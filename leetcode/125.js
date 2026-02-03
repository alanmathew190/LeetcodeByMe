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
let nums = [1, 2, 3, 4]

  let freq={}
        for(let i=0;i<nums.length;i++){
           let ch=nums[i]
           if(freq[ch]===undefined){
            freq[ch]=1
           }else{
            freq[ch]++
           }
           console.log(freq)
            if(freq[ch]>1){
                console.log(false) 
                return
        }
        console.log(true)
        }
       
