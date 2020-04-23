/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums) return 0;
  if (nums.length === 1) return nums[0];

  let sum = nums[0];
  let prev = nums[0];
  let current = 0;
  for (let i = 1; i < nums.length; i++) {
    if (prev < 0) {
      current = nums[i];
    } else {
      current = nums[i] + prev;
    }
    sum = Math.max(sum, current);
    prev = current;
  }

  return sum;
};
