// As a hydrologist, you're studying a unique rectangular island
// situated between the Atlantic Ocean and the Indian Ocean. The
// island's terrain varies in elevation across its surface.
// The island is represented as an m x n grid, where each cell has
// a specific elevation.

// The ocean borders are as follows:

// The Atlantic Ocean borders the island's western and northern coasts.
// The Indian Ocean borders the island's southern and eastern coasts.

// You're given an m x n integer matrix `heights` where `heights[r][c]`
// represents the height above sea level of the cell at coordinate (r, c).
// During the rainy season, water accumulates on the island and
// flows according to these rules:

// Water can flow from a cell to adjacent cells in four directions,
// north, south, east, and west if the adjacent cell's elevation
// is less than or equal to the current cell's elevation.
// Water can flow from any edge cell directly into the bordering ocean.

// Your task is to identify all the locations on the island where accumulated
// rainwater has the potential to eventually reach *both* the Atlantic and
// Indian Oceans, either directly or through connected cells.


// Example 1:

// Input:
// [
//  [1, 2, 1, 3, 6],
//  [2, 2, 3, 4, 4],
//  [2, 3, 5, 2, 1],
//  [9, 8, 1, 3, 5],
//  [5, 1, 2, 2, 3]
// ]

// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

// Explanation:
// - [0,4] with an elevation of 6 can flow to the Atlantic Ocean (north) and the Indian Ocean (east) directly.
// - [1,3] with an elevation of 4 can flow to the Atlantic via [0,3] (as well as several other paths) and
//   can reach the Indian ocean via [1,4] (as well as several other paths).
// - [1,4] can flow to both oceans in a similar fashion as [1, 3].
// - [2,2] can reach Atlantic Ocean directly to the north or west and the Indian ocean directly to the east.
// - [3,0], [3,1], and [4,0] can flow to the Atlantic to the west and reach the Indian ocean to the south.

// Example 2:

// Input:
// [[1]]

// Output: [[0,0]]

// Explanation: On a single-cell island, water from the sole cell can reach both oceans.

// Algorithm
// Make two sets: Atlantic and Indian
// Populate Atlantic with top and left cells, Indian with bottom and right
// For each cell, check if it has a path to any node in both sets. If it has
// a path to a set, add it to that set.
// If it has a path to both sets, add it to our solutions array

function waterFlow(heights) {
  function hasPath(set, coord) {
    if (set.has(coord)) return true;
    let neighbors = [];
    let x = Number(coord.slice(0, coord.indexOf(',')));
    let y = Number(coord.slice(coord.indexOf(',') + 1));
    if (x > 0 && heights[x - 1][y] <= heights[x][y]) {
      neighbors.push(`${x - 1},${y}`);
    }
    if (x < ROWS.length - 1 && heights[x + 1][y] <= heights[x][y]) {
      neighbors.push(`${x + 1}${y}`);
    }
    if (y > 0 && heights[x][y - 1] <= heights[x][y]) {
      neighbors.push(`${x},${y - 1}`);
    }
    if (y < COLS.length - 1 && heights[x][y + 1] <= heights[x][y]) {
      neighbors.push(`${x}${y + 1}`);
    }
    if (neighbors.length === 0) return false;
    if (neighbors.some(neighbor => hasPath(set, neighbor))) {
      set.add(coord);
      return true;
    }
  }
  let solution = [];
  let atlantic = new Set();
  let indian = new Set();
  const ROWS = heights.length;
  const COLS = heights[0].length;
  for (let row = 0; row < ROWS; row += 1) {
    atlantic.add(`${row},0`);
    indian.add(`${row},${COLS - 1}`);
  }
  for (let col = 0; col < COLS; col += 1) {
    atlantic.add(`0,${col}`);
    indian.add(`${ROWS - 1},${col}`);
  }
  heights.forEach((row, x) => {
    row.forEach((_, y) => {
      if (hasPath(indian, `${x},${y}`) && hasPath(atlantic, `${x},${y}`)) {
        solution.push([x, y]);
      }
    });
  });
  console.log(solution);
  return solution;
}

// Helper function for the test cases

function coordinateSetsEqual(set1, set2) {
  if (set1.length !== set2.length) return false;
  const stringSet1 = new Set(set1.map(JSON.stringify));
  return set2.every(coord => stringSet1.has(JSON.stringify(coord)));
}

// Test Cases:

const grid1 = [
  [1, 2, 1, 3, 6],
  [2, 2, 3, 4, 4],
  [2, 3, 5, 2, 1],
  [9, 8, 1, 3, 5],
  [5, 1, 2, 2, 3]
];
const expected1 = [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]];
console.log(coordinateSetsEqual(waterFlow(grid1), expected1));

const grid2 = [[1]];
const expected2 = [[0,0]];
console.log(coordinateSetsEqual(waterFlow(grid2), expected2));

const grid3 = [
  [3, 3, 3, 3, 3],
  [3, 2, 2, 2, 3],
  [3, 2, 1, 2, 3],
  [3, 2, 2, 2, 3],
  [3, 3, 3, 3, 3]
];
const expected3 = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,0],[2,4],[3,0],[3,4],[4,0],[4,1],[4,2],[4,3],[4,4]];
console.log(coordinateSetsEqual(waterFlow(grid3), expected3));

const grid4 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];
const expected4 = [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
console.log(coordinateSetsEqual(waterFlow(grid4), expected4));

const grid5 = [
  [10, 10, 10, 10],
  [10,  1,  1, 10],
  [10,  1,  1, 10],
  [10, 10, 10, 10]
];
const expected5 = [[0,0],[0,1],[0,2],[0,3],[1,0],[1,3],[2,0],[2,3],[3,0],[3,1],[3,2],[3,3]];
console.log(coordinateSetsEqual(waterFlow(grid5), expected5));