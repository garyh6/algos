/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validate(root, null, null);
};

var validate = function (root, max, min) {
  if (root === null) return true;
  else if ((max != null && root.val >= max) || (min != null && root.val <= min))
    return false;
  else
    return (
      validate(root.left, root.val, min) && validate(root.right, max, root.val)
    );
};
