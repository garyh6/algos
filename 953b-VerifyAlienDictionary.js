/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  // create dictionary 
  // loop through words and check if next word is greater than first word
  // check word by going through each letter
  // if same, length of first word is shorter than next word
  const dict = {}
  for (let i=0; i<order.length; i++) {
      let letter = order[i]
      dict[letter] = i+1
  }
  
  for (let i=0; i<words.length-1; i++) {
      let first = words[i]
      let second = words[i+1]
      
      for (let j=0; j<Math.max(first.length, second.length); j++) {
          let l1 = dict[first[j]]
          let l2 = dict[second[j]] === undefined ? 0 : dict[second[j]]

          if(l1 > l2) return false
          else if(l1 < l2) break
      }
  }
  
  return true
};

const words = ["apple", "app"],
  order = "abcdefghijklmnopqrstuvwxyz";

const res = isAlienSorted(words, order);

console.log("************ res", res);
