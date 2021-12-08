const reverseString = function (str) {
  let myArray = Array.from(str);
  let reversed = myArray.reverse();
  let reveresedString = reversed.join("");
  return reveresedString;
};

// Do not edit below this line
module.exports = reverseString;
