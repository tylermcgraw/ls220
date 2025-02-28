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

// Algorithm
// Recursion
// Base case: if root is null, return 0
// Recursive case: return 1 + max(height left, height right)

function maxDepth(root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

class TreeNode {
constructor(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
}

// Helper function to create a binary tree from an array
function arrayToTree(arr, i = 0) {
  if (i >= arr.length || arr[i] === null) return null;
  let root = new TreeNode(arr[i]);
  root.left = arrayToTree(arr, 2 * i + 1);
  root.right = arrayToTree(arr, 2 * i + 2);
  return root;
}

// Test cases
console.log(maxDepth(arrayToTree([3,9,20,null,null,15,7]))); // Expected output: 3
console.log(maxDepth(arrayToTree([1,null,2]))); // Expected output: 2
console.log(maxDepth(arrayToTree([]))); // Expected output: 0
console.log(maxDepth(arrayToTree([1,2,3,4,5,null,null,6]))); // Expected output: 4