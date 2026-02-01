var maxProfit = function (prices) {
    let left = 0
    let max = 0
    
    for (let right = 1; right < prices.length; right++){
        if (prices[right] > prices[left]) {
            
            max = Math.max(max, prices[right] - prices[left])
            
        } while (prices[right] < prices[left]) {
            left++;
        }
        
    }
    return max
    
};
console.log(maxProfit([7,1,5,3,6,4]));
