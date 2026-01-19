function outer(x) {
  return function inner(y) {
    console.log(x + y);
  };
}

const fn = outer(5);
fn(3);
