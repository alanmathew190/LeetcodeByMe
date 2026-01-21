var lengthOfLastWord = function (s) {
    let words = s.split(" ")
    for (i = words.length - 1; i >= 0; i--) {
        if (words[i] !== "") {
            return words[i].length
        }
    }
   
};



console.log(lengthOfLastWord("   fly me   to   the moon  "));