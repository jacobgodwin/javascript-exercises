const removeFromArray = function (items, ...theArgs) {
  return items.filter((item) => !theArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
