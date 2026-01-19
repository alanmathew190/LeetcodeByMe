var recoverOrder = function (order, friends) {

   let arr = [];
   for (i = 0; i < order.length; i++) {
     if (friends.includes(order[i])) arr.push(order[i]);
   }
   return arr;

};

console.log(recoverOrder([3, 1, 2, 5, 4],[1, 3, 4]));