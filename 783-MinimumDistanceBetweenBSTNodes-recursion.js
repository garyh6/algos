/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let prev = null;
  let min = Infinity;

  const inorder = (curr) => {
    if (!curr) return;

    inorder(curr.left);

    if (prev) {
      min = Math.min(min, Math.abs(curr.val - prev.val));
    }
    prev = curr;

    inorder(curr.right);
  };

  inorder(root);
  return min;
};

[90, 69, null, 49, 89, null, 52, null, null, null, null];
