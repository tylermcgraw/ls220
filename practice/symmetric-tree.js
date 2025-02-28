/**
 * Given the root of a binary tree, determine if it is symmetric around its center.
 * 
 * Definition for a binary tree node:
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root - The root of the binary tree
 * @return {boolean} - True if the tree is symmetric, false otherwise
 */

// Algorithm
// Edge cases - return true if lenggth < 2
// BFS - add each child to queue (including null)
// For a given level of the tree, add all nodes to arary and check if mirrored

function isSymmetric(root) {
  if (root === null) return true;
  let queue = [root];
  while (queue.length > 0) {
    let nodes = [];
    let length = queue.length;
    for (let idx = 0; idx < length; idx += 1) {
      let current = queue.shift();
      nodes.push(current);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    if (!isMirrored(nodes)) return false;
  }
  return true;
}

function isMirrored(nodes) {
  let length = nodes.length;
  for (let idx = 0; idx < length / 2; idx += 1) {
    if (nodes[idx] !== nodes[length - 1 - idx]) return false;
  }
  return true;
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
console.log(isSymmetric(arrayToTree([1,2,2,3,4,4,3]))); // Expected output: true
console.log(isSymmetric(arrayToTree([1,2,2,null,3,null,3]))); // Expected output: false
console.log(isSymmetric(arrayToTree([1]))); // Expected output: true
console.log(isSymmetric(arrayToTree([]))); // Expected output: true
console.log(isSymmetric(arrayToTree([1,2,2,2,null,2]))); // Expected output: false