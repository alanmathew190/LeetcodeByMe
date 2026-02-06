var groupThePeople = function (groupSizes) {
  let gsizes = {};
  let result = [];

  for (let i = 0; i < groupSizes.length; i++) {
    let size = groupSizes[i];

    if (gsizes[size] == undefined) {
      gsizes[size] = [];
    }
    gsizes[size].push(i);
    if (gsizes[size].length === size) {
      result.push([...gsizes[size]]);
      gsizes[size] = [];
    }
  }

  return result;
};
console.log(groupThePeople([3,3,3,3,3,1,3]))