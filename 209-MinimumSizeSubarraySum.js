/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(s <= 0) return 0
    if(nums.length === 0) return 0
    
    const dict = {}
    let min = Infinity
    let left = 0
    let right = 0
    let sum = 0
    
    while (left != nums.length) {
        if(sum < s && right != nums.length) {
            sum += nums[right]
            right++
        } else if(s === sum && right != nums.length) {
            if(min > right - left ) {
                min = right - left
            }
            sum += nums[right]
            right++
        } else {
            if(sum >= s && min > right - left ) {
                min = right - left
            }
            sum -= nums[left]
            left++
        }
    }
    
    if (min === Infinity) return 0
    return min
};