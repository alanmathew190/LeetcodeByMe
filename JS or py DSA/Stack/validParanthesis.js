s = "{[]}";
let stack = [];

for (let i = 0; i < s.length; i++) {
  let ch = s[i];

  // opening brackets
  if (ch === "{" || ch === "[" || ch === "(") {
    stack.push(ch);
  }
  // closing brackets
  else {
    if (stack.length === 0) {
      console.log(false);
      return;
    }

    let top = stack[stack.length - 1];

    if (
      (top === "{" && ch === "}") ||
      (top === "[" && ch === "]") ||
      (top === "(" && ch === ")")
    ) {
      stack.pop();
    } else {
      console.log(false);
      return;
    }
  }

  console.log(stack);
}

console.log(stack.length === 0);
