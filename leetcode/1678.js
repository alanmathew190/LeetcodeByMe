var interpret = function (command) {
    let c = command.split("");
    console.log(c)
    let ans=[]
    for (let i = 0; i < c.length; i++){
     if (c[i] == "G") {
      ans.push("G");
    }
    
   else if (c[i] == "(" && c[i+1]==")") {
     ans.push("o")
    } else if (c[i] == "(" && c[i + 1] == "a" ) {
      ans.push("al");
    } 
  }
  return ans.join("");
};


console.log(interpret("G()(al)"));