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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return []
    
    const queue = []
    const res = []
    
    queue.push(root)
    
    while (queue.length) {
        let len = queue.length
        let level = []
        
        for(let i=0; i<len; i++) {
            let temp = queue.shift()
            level.push(temp.val)
            
            if(temp.left) {
                queue.push(temp.left)
            }
            if(temp.right) {
                queue.push(temp.right)
            }
        }
        
        res.push(level)
        level = []
    }
    
    return res
};