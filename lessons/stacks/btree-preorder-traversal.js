// Given the root node of a binary tree, implement a
// function `preorderTraversal`, that returns an
// array containing the values of the nodes visited in
// a preorder traversal.

// Your task is to implement the function iteratively using a stack.

function preorderTraversal(root) {
  let btree = [];
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node !== null) {
      btree.push(node.val);
      stack.push(node.right, node.left);
    }
  }
  return btree;
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new Node(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();

    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}

// Test Cases:

const tree1 = buildTree([1, null, 2, 3]);
console.log(preorderTraversal(tree1)); // Output: [1, 2, 3]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(preorderTraversal(tree2)); // Output: [1, 2, 3, 4, 5]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(preorderTraversal(tree3)); // Output: [5, 3, 2, 1]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(preorderTraversal(tree4)); // Output: [10, 5, 6, 15, 12, 11, 21]