var numberOfSteps = function(num) {
    let number=0;
   while(num>0){
       if(num%2==0){
           num = num / 2;
       }
       else{
           num = num - 1;
       }
       number+=1;
    }
    return number;
};
 console.log(numberOfSteps(14))
