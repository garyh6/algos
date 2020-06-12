/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0
    
    function getDepth(node, current, max) {
        if(max < current) max = current
        if(node.left === null && node.right === null) return max
        
        let left = 0
        let right = 0
        
        if(node.left) {
            left = getDepth(node.left, current + 1, max)
        }
        
        if(node.right) {
            right = getDepth(node.right, current + 1, max)
        }
        
        return Math.max(left, right)
    }
    
    return getDepth(root, 1, 1)
};