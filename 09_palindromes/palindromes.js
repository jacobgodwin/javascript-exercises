const palindromes = function (item) {
  const puncts = [".", ",", "!", "?", ";", ":"];
  let pal = item.toLowerCase();
  puncts.forEach(function (punct) {
    if (pal.endsWith(punct)) {
      let palLen = pal.length;
      let noPunct = pal.slice(0, palLen - 1);
      pal = noPunct;
    }
  });
  if (pal.indexOf(",") > -1) {
    let noComma = pal.split(",").join("");
    pal = noComma;
  }
  if (pal.indexOf(" ") > -1) {
    let noSpace = pal.split(" ").join("");
    pal = noSpace;
  }
  let palSplit = pal.split("");
  let revPalArray = palSplit.reverse();
  let joinPal = revPalArray.join("");

  if (pal === joinPal) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
