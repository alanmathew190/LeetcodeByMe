var findWordsContaining = function (words, x) {
  let ret = [];
  for (i = 0; i < words.length; i++) {
      if (words[i].includes(x))
        ret.push(i);
  }
  return ret;
};

console.log(findWordsContaining(["leet", "code"],"e"));