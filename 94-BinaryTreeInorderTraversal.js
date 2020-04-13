/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];

  function inorder(current) {
    if (!current) return;

    inorder(current.left);
    res.push(current.val);
    inorder(current.right);
  }

  inorder(root);

  return res;
};

var inorderTraversalIterative = function (root) {
  const res = [];

  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }

  return res;
};
