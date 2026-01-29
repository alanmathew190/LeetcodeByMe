var sortSentence = function (s) {
    
    let arr = s.split(" ")
    let result=[]
    
    for (let word of arr) {
        let pos = word[word.length - 1];
        let clean = word.slice(0, -1)
        result[pos-1]=clean
    }
    return result.join(" ")
    
};


console.log(sortSentence("is2 sentence4 This1 a3"));