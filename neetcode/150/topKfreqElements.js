 var topKFrequent=function(nums, k) {
     let freq = {}
      let result=[]
     for (let right = 0; right < nums.length; right++){
         let ch = nums[right]
         freq[ch]=(freq[ch]||0)+1
     }
     let arr = Object.entries(freq)
     arr.sort((a,b)=>b[1]-a[1])
     console.log(arr)

     for (let i = 0; i < k; i++) {
       result.push(Number(arr[i][0]));
     }
     return result
}



console.log(topKFrequent([7,7],1));