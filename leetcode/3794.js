var reversePrefix = function (s, k) {
    let a = s.slice(0, k).split("").reverse().join("");
    return a+s.slice(k)


};


console.log(reversePrefix("abcd", 2));