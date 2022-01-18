const fibonacci = function (num) {
  let fib = [];
  if (num < 0) {
    return "OOPS";
  }
  for (let i = 0; i <= num; i++) {
    if (fib.length === 0) {
      fib.push(1, 1);
    } else {
      fib.push(fib[i - 1] + fib[i]);
    }
  }
  return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
