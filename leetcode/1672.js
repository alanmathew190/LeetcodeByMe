

var maximumWealth = function (accounts) {
   
 let added= accounts.map(account => 
     account.reduce((a,b)=>a+b,0))

     return Math.max(...added);
    
};
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));