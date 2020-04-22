/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const res = [];

  helper([], 0, 0);

  return res;

  function helper(current, idx, sum) {
    if (sum === n && current.length === k) {
      res.push(current.slice());
      return;
    }
    if (current.length >= k) return;
    if (sum > n) return;

    for (let i = idx; i < nums.length; i++) {
      current.push(nums[i]);
      helper(current, i + 1, sum + nums[i]);
      current.pop();
    }
  }
};
