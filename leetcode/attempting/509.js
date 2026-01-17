var fib = function (n) {
    const arr = [0, 1]
   
    
    for (i = 2; i <= n; i++){
            arr.push(arr[i-1]+arr[i-2]);
    }

    return arr[arr.length-1]
};

console.log(fib(4))