var numJewelsInStones = function (jewels, stones) {
  let st=stones.split("")
  let je=jewels.split("")
  let count = 0;
  for (i = 0; i < je.length; i++) {
    for (j = 0; j < st.length; j++) {
        if (je[i] == st[j]) {
            count++;
        }
        else {
            continue
        }
      }
      
    }
     return count;
 
};

console.log(numJewelsInStones("aA", "aAAbbbb"));