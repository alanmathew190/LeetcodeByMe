function remember() {
  let saved;

  return function (x) {
    if (saved !== undefined) {
      return saved;
    }

    saved = x * 2;
    return saved;
  };
}


const fn = remember();

console.log(fn(5)); // 10
console.log(fn(5)); // 10
console.log(fn(5)); // 10