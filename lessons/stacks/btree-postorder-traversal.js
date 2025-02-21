// Given the root node of a binary tree, implement a
// function `postorderTraversal` that returns an
// array containing the values of the nodes visited in
// an postorder traversal.

// Your task is to implement the function iteratively using a stack.

/*
function postorderTraversal(root) {
  let btree = [];
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.left) {
      stack.push(current);
      stack.push(current.left);
      current.left = null;
    } else if (current.right) {
      stack.push(current);
      stack.push(current.right);
      current.right = null
    } else {
      btree.push(current.val);
    }
  }
  return btree;
}
*/

// improved - 2 stacks
function postorderTraversal(root) {
  const stack1 = [root];
  const stack2 = [];
  const result = [];

  while(stack1.length > 0) {
    const node = stack1.pop();
    stack2.push(node);

    if(node.left) stack1.push(node.left);
    if(node.right) stack1.push(node.right);
  }

  while(stack2.length > 0) {
    const node = stack2.pop();
    result.push(node.val);
  }

  return result;
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

// Test cases
const tree1 = buildTree([1, null, 2, 3]);
console.log(postorderTraversal(tree1)); // Output: [3, 2, 1]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(postorderTraversal(tree2)); // Output: [2, 5, 4, 3, 1]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(postorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(postorderTraversal(tree4)); // Output: [6, 5, 11, 12, 21, 15, 10]