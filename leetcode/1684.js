var countConsistentStrings = function(allowed, words) {
    let tot = 0
    for (let word of words){
      for (j = 0; j < word.length; j++) {
        if (!allowed.includes(word[j])) {
            tot++;
            break;
          }
        }
    }
    return words.length - tot;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));


console.log("1" + 2 + 3)

function print() {
    var x = "5"
    console.log(x+y)
}
var x = 3
var y = 2

print()
console.log(x+y)