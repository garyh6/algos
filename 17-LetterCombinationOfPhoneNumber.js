/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const mapper = {
    "0": "",
    "1": "",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const res = [];

  helper(0, "");

  return res;

  function helper(idx, current) {
    if (idx === digits.length) {
      res.push(current);
      return;
    }

    for (let j = 0; j < mapper[digits[idx]].length; j++) {
      helper(idx + 1, current + mapper[digits[idx]][j]);
    }
  }
};
