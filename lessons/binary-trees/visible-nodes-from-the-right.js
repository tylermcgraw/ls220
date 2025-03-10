// Given the root of a binary tree, return an array of the node
// values visible when the tree is viewed from the right side.

// Example 1:

//    1       1
//   / \
//  2   3     3
//   \   \
//    5   4   7

// Input: [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:

//    1
//     \
//      3

// Input: [1,null,3]
// Output: [1,3]

// Queue
// Keep track of visible values, idx
// Add root to queue
// Dequeue, add children to queue
// If idx = a power of 2, add rightmost val to visible array
function visibleNodes(root) {
  if (root === null || root.length === 0) return [];
  let visible = [];
  let queue = [root]
  while (queue.length > 0) {
    let queueLength = queue.length;
    for (let idx = 0; idx < queueLength; idx += 1) {
      let current = queue.shift();
      if (idx === queueLength - 1) visible.push(current.val);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }
  return visible;
}

function getHeight(root) {
  if (root === null) {
    return 0
  }

  return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to build a tree from an array
function buildTree(arr) {
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

// Test cases
console.log(visibleNodes(buildTree([1,2,3,null,5,null,4]))); // Expected: [1,3,4]
console.log(visibleNodes(buildTree([1,null,3]))); // Expected: [1,3]
console.log(visibleNodes(buildTree([]))); // Expected: []
console.log(visibleNodes(buildTree([1,2,3,4]))); // Expected: [1,3,4]
console.log(visibleNodes(buildTree([1,2,3,null,5,null,4,6,null,7]))); // Expected: [1,3,4,7]
console.log(visibleNodes(buildTree([1,2,3,null,4,5,6,null,null,7]))); // Expected: [1,3,6,7]
console.log(visibleNodes(buildTree([1,2,3,4,5,6,7]))); // Expected: [1,3,7]
console.log(visibleNodes(buildTree([1,2,3,4,null,5,6,7,null,null,null,8]))); // Expected: [1,3,6,8]
console.log(visibleNodes(buildTree([1,2,3,4,5,null,6,null,null,7]))); // Expected: [1,3,6,7]
console.log(visibleNodes(buildTree([1,2,3,4,null,5,null,6,null,7,null,8]))); // Expected: [1,3,5,7,8]