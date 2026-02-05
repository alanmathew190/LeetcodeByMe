var strStr = function (haystack, needle) {
 let l = 0;
 let r = 0;
 let start = 0;
 while (l < needle.length && r < haystack.length) {
   if (needle[l] === haystack[r]) {
     l++;
     r++;
   } else {
     r = start + 1;
     start++;
     l = 0;
   }
 }

 return l === needle.length ? start : -1;
};

console.log(strStr("sadbutsad", "sad"));
