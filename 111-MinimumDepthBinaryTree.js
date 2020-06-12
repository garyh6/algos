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
var minDepth = function(root) {
    if(root === null) return 0
    
    let min = 0
    const queue = []
    
    queue.push(root)
    
    while(queue.length) {
        min++
        let len = queue.length
        
        for(let i=0; i<len; i++) {
            let temp = queue.shift()
            
            if(!temp.left && !temp.right) return min
            
            if(temp.left) {
                queue.push(temp.left)
            }
            
            if(temp.right) {
                queue.push(temp.right)
            }
        }
    }
    return min
};