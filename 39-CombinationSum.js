/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  helper([], 0, 0);

  return res;

  function helper(current, sum, idx) {
    if (sum === target) {
      res.push(current.slice());
      return;
    }

    if (sum > target) return;

    for (let i = idx; i < candidates.length; i++) {
      current.push(candidates[i]);
      helper(current, sum + candidates[i], i);
      current.pop();
    }
  }
};
