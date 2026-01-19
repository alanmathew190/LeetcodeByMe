var scoreOfString = function (s) {
    let arr = []
    let score=0
    for (let char in s) {
      arr.push(s.charCodeAt(char))
    }
    for (i = 0; i < arr.length-1; i++){
        score+=Math.abs(arr[i]-arr[i+1])
    }
    return score
};

console.log(scoreOfString("hello")); 