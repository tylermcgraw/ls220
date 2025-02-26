// You are given a 2D matrix of integers. Your task is to traverse the matrix
// in a spiral order, starting from the top-left corner and moving clockwise.
// Return an array containing all elements of the matrix in the order they
// are visited during the spiral traversal.

// The spiral order moves right, then down, then left, then up, and repeats
// this pattern until all elements have been visited.

// Example 1:
// Input:
// [
//  [10, 20, 30],
//  [40, 50, 60],
//  [70, 80, 90]
// ]
// Output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

// Example 2:
// Input:
// [
//  [1,  2,  3,  4],
//  [5,  6,  7,  8],
//  [9,  10, 11, 12],
//  [13, 14, 15, 16]
// ]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// Algorithm
// Keep track of number of cells visited
// Keep track of boundaries: left = top = 0, right = cols, bottom = rows
// Keep track of direction (0 = right, 1 = down, 2 = left, 3 = up)
// Keep track of current row and col (start at 0,0)
// Keep track of solution (array)
// Repeat until number of cells visited = rows * cols
// Add matrix[row][col] to solution
// If we hit a boundary, update boundary (shrinks by 1)
// Else, travel by 1 in current direction

function spiralTraversal(matrix) {
  const TOTAL_CELLS = matrix.length * matrix[0].length;
  let numVisited = 0;
  let left = 0;
  let top = 1;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let direction = row = col = 0;
  let solution = [];
  while (numVisited < TOTAL_CELLS) {
    solution.push(matrix[row][col]);
    numVisited += 1;
    switch (direction) {
      case 0:
        if (col < right) {
          col += 1;
        } else {
          row += 1;
          direction = 1;
          right -= 1;
        }
        break;
      case 1:
        if (row < bottom) {
          row += 1;
        } else {
          col -= 1;
          direction = 2;
          bottom -= 1;
        }
        break;
      case 2:
        if (col > left) {
          col -= 1;
        } else {
          row -= 1;
          direction = 3;
          left += 1;
        }
        break;
      case 3:
      if (row > top) {
        row -= 1;
      } else {
        col += 1;
        direction = 0;
        top += 1;
      }
      break;
    }
  }
  return solution;
}

// Algorithm
// Keep track of how many cols we can travel (start at matrix[0].length)
// Keep track of how many rows we can travel (start at matrix.length - 1)
// Start at 0,0
// Counter to keep track of which way to turn next, start at 0
// Travel #cols right, #cols -= 1 (if counter++ % 4 === 0)
// Travel #rows down, #rows -= 1  (if counter++ % 4 === 1)
// Travel #cols left, cols -= 1   (if counter++ % 4 === 2)
// Travel #rows up, #rows -= 1    (if counter++ % 4 === 3)
// Stop when counter = m x n - 1, or when #rows and #cols = 0
/*
function spiralTraversal(matrix) {
  let colsLeft = matrix[0].length;
  let rowsLeft = matrix.length - 1;
  let x = y = turns = 0;
  let solution = [];
  while (rowsLeft > 0 && colsLeft > 0) {
    let cur;
    switch (turns % 4) {
      case 0:
        cur = y;
        for (y; y < cur + colsLeft; y += 1) {
          solution.push(matrix[x][y]);
        }
        y -= 1;
        x += 1;
        colsLeft -= 1;
        break;
      case 1:
        cur = x;
        for (x; x < cur + rowsLeft; x += 1) {
          solution.push(matrix[x][y]);
        }
        x -= 1;
        y -= 1;
        rowsLeft -= 1;
        break;
      case 2:
        cur = y;
        for (y; y > cur - colsLeft; y -= 1) {
          solution.push(matrix[x][y]);
        }
        y += 1;
        x -= 1;
        colsLeft -= 1;
        break;
      case 3:
        cur = x;
        for (x; x > cur - rowsLeft; x -= 1) {
          solution.push(matrix[x][y]);
        }
        x += 1;
        y += 1;
        rowsLeft -= 1;
        break;
      }
    turns += 1;
  }
  return solution;
}
*/

// Test cases
console.log(spiralTraversal([
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
])); // Expected output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

console.log(spiralTraversal([
  [ 1,  2,  3,  4],
  [ 5,  6,  7,  8],
  [ 9, 10, 11, 12],
  [13, 14, 15, 16]
])); // Expected output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

console.log(spiralTraversal([
  [5, 10],
  [15, 20]
])); // Expected output: [5, 10, 20, 15]

console.log(spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
])); // Expected output: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]

console.log(spiralTraversal([
  [42]
])); // Expected output: [42]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5, 6]
])); // Expected output: [1, 2, 3, 4, 5, 6]

console.log(spiralTraversal([
  [1],
  [2],
  [3],
  [4],
  [5],
  [6]
])); // Expected output: [1, 2, 3, 4, 5, 6]