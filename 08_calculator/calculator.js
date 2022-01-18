const add = function (a, b) {
  let total = a + b;
  return total;
};

const subtract = function (a, b) {
  let diff = a - b;
  return diff;
};

const sum = function (numbers) {
  let sum = 0;
  if (numbers === undefined || numbers.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
};

const multiply = function (numbers) {
  let prod = numbers[0];
  if (numbers === undefined || numbers.length == 0) {
    return 0;
  } else {
    for (let i = 1; i < numbers.length; i++) {
      prod *= numbers[i];
    }
    return prod;
  }
};

const power = function (a, b) {
  let result = a ** b;
  return result;
};

const factorial = function (num) {
  let result = num;
  if (num === 0) {
    return 1;
  } else {
    for (let i = num; i > 1; i--) {
      result = result * (i - 1);
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
