var checkStrings = function (s1, s2) {
    if (s1.length != s2.length) {
    return false
    }

    let s1odd = []
    let s1even = []
    let s2odd = [];
    let s2even = [];
    
    for (i = 0; i < s1.length; i++){
        if (i % 2 == 0) {
            s1even.push(s1[i])
             s2even.push(s2[i]);
        }
        else {
            s1odd.push(s1[i]);
            s2odd.push(s2[i]);
        }
    }
    s1odd.sort()
     s1even.sort();
    s2odd.sort();
    s2even.sort();

    if (s1odd.join("") == s2odd.join("") && s1even.join("") == s2even.join("")) {
      return true;
    } else {
      return false;
    }
};


console.log(checkStrings("abcdba", "cabdab"))