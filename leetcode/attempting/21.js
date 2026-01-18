var mergeTwoLists = function (list1, list2) {
  let list3 = list1.concat(list2).sort((a,b)=>a-b);
  return list3;
};
// var mergeTwoLists = function (list1, list2) {
//   let list3 = [...list1, ...list2].sort();
//   return list3;
// };

console.log(mergeTwoLists([11,234,12],[3,5456,3]))