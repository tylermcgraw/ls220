// You're a botanist studying the spread of a peculiar wilting
// condition in a rose garden. The garden is represented as a
// grid where each cell can have one of three states:

// - 0 representing an empty plot,
// - 1 representing a healthy rose, or
// - 2 representing a wilted rose.

// Every day, any healthy rose that is adjacent (up, down, left,
// or right) to a wilted rose begins to wilt.
// Your task is to determine the minimum number of days it takes
// for all roses in the garden to wilt. If it's impossible for
// all roses to wilt, return -1.

// Example 1:

// Input:
// [
//   [2,1,1],
//   [1,1,0],
//   [0,1,1]
// ]

// Output: 4

// Explanation:
// Day 1: Roses at (0, 1) and (1, 0) will wilt.
// Day 2: Roses at (0, 2) and (1, 1) will wilt.
// Day 3: The rose at (2, 1) will wilt.
// Day 4: The final rose at (2, 2) will wilt.

// Example 2:

// Input:
// [
//   [2,1,1],
//   [0,1,1],
//   [1,0,1]
// ]

// Output: -1

// Explanation: The rose in the bottom left corner (2, 0)
// will never wilt because it's not adjacent to any
// other roses.

// Algorithm
// Create adjacency list for each rose/wilted rose
// Create set of wilted roses
// If there is no path from a rose to any wilted rose, return -1
// Return length of longest path from a rose to a wilted rose

function wiltedRoses(garden) {
  let adjList = getAdjacencyList(garden);
  let wilted = getWilted(garden);
  return longestPath(adjList, wilted, garden);
}

function longestPath(adjList, wilted, garden) {
  const ROWS = garden.length;
  if (ROWS === 0) return -1;
  const COLS = garden[0].length;
  let longestPath = -1;
  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      if (garden[row][col] === 1) {
        let pathLength = wilted.values().map(coord => {
          getPathLength(adjList, `${row},${col}`, coord)
        }).reduce((acc, length) => length < acc ? length : acc, 0);
        // console.log(pathLength);
        if (pathLength === -1) return pathLength;
        if (pathLength > longestPath) longestPath = pathLength;
      }
    }
  }
  // console.log(longestPath);
  return longestPath;
}

function getPathLength(adjList, src, dst) {
  let pathLength = 0;
  function hasPathHelper(cur) {
    if (cur === dst) return true;
    pathLength += 1;
    let next = adjList.get(cur);
    if (seen.has(cur) || !next || next.length === 0) return false;
    seen.add(cur);
    return next.some(neighbor => hasPathHelper(neighbor));
  }
  let seen = new Set();
  console.log(pathLength);
  return hasPathHelper(src) ? pathLength : -1;
}

function getWilted(garden) {
  let wilted = new Set();
  garden.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      if (cell === 2) wilted.add(`${rowIdx},${colIdx}`);
    });
  });
  return wilted;
}

function getAdjacencyList(garden) {
  let adjList = new Map();
  garden.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      if (cell === 0) return;
      let coord = `${rowIdx},${colIdx}`;
      adjList.set(coord, []);
      let neighbors = adjList.get(coord);
      if (rowIdx > 0 && garden[rowIdx - 1][colIdx] !== 0) {
        neighbors.push(`${rowIdx - 1},${colIdx}`);
      }
      if (rowIdx < garden.length - 1 && garden[rowIdx + 1][colIdx] !== 0) {
        neighbors.push(`${rowIdx + 1},${colIdx}`);
      }
      if (colIdx > 0 && garden[rowIdx][colIdx - 1] !== 0) {
        neighbors.push(`${rowIdx},${colIdx - 1}`);
      }
      if (colIdx < garden[0].length - 1 && garden[rowIdx][colIdx + 1] !== 0) {
        neighbors.push(`${rowIdx},${colIdx + 1}`);
      }
    });
  });
  return adjList;
}

// Test Cases:

console.log(wiltedRoses([[2,1,1],[1,1,0],[0,1,1]]) === 4);
// console.log(wiltedRoses([[2,1,1],[0,1,1],[1,0,1]]) === -1);
// console.log(wiltedRoses([[0,2]]) === 0);
// console.log(wiltedRoses([[1,1,1],[1,2,1],[1,1,1]]) === 2);
// console.log(wiltedRoses([[2,2],[1,1],[0,0]]) === 1);
// console.log(wiltedRoses([[1,1,1],[1,1,1],[1,1,1]]) === -1);
// console.log(wiltedRoses([[2]]) === 0);
// console.log(wiltedRoses([[1]]) === -1);
// console.log(wiltedRoses([]) === -1);
// console.log(wiltedRoses([[0,0,0],[0,1,0],[0,0,2]]) === -1);
// console.log(wiltedRoses([[2,1,1],[1,1,1],[0,1,2]]) === 2);