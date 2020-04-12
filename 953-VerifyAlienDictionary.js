/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const dict = {};

  for (let i = 0; i < order.length; i++) {
    dict[order[i]] = i;
  }

  let shorterLength;
  for (let j = 0; j < words.length - 1; j++) {
    shorterLength = Math.min(words[j].length, words[j + 1].length);

    for (let k = 0; k < shorterLength; k++) {
      if (dict[words[j][k]] > dict[words[j + 1][k]]) return false;
      if (dict[words[j][k]] < dict[words[j + 1][k]]) break;

      if (words[j].length > words[j + 1].length && k === shorterLength - 1)
        return false;
    }
  }

  return true;
};

const words = ["apple", "app"],
  order = "abcdefghijklmnopqrstuvwxyz";

const res = isAlienSorted(words, order);

console.log("************ res", res);
