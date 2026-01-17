

var heightChecker = function (heights) {
    let hei=[...heights].sort((a,b)=>a-b)
    let count=0;
    
    for (i = 0; i < hei.length; i++){
        if (hei[i] != heights[i]) {
            count++
        }
    }
    return count
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));