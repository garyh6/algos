/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  helper(0, [], 0);

  return res;

  function helper(idx, current, sum) {
    if (sum === target) {
      res.push(current.slice());
      return;
    }

    if (sum > target) return;

    for (let i = idx; i < candidates.length; i++) {
      if (i === idx || candidates[i] != candidates[i - 1]) {
        current.push(candidates[i]);
        helper(i + 1, current, sum + candidates[i]);
        current.pop();
      }
    }
  }
};
