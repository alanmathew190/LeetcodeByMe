

var kidsWithCandies = function (candies, extraCandies) {
    let largest= Math.max(...candies)
   let added=  candies.map((candy) => {
        return candy+extraCandies

   })
    for (i = 0; i < added.length; i++){
        if (added[i] >= largest)
            added[i] = true;
        else added[i]=false
    }
    return added
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

