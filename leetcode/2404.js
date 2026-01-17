var mostFrequentEven = function(nums) {
    let count = {};     
    let maxFreq = 0;    
    let answer = -1;    

    for (let num of nums) {
        if (num % 2 === 0) {
            count[num] = (count[num] || 0) + 1;
            if (count[num] > maxFreq || (count[num] === maxFreq && num < answer)) {
                maxFreq = count[num];
                answer = num;
            }
        }
    }
    return answer;
};
console.log(mostFrequentEven([0,1, 2, 4, 4, 2])); 

