// You are provided with a 2D grid map where each cell
// is either marked as a tree ('T') or open land ('O').
// Your goal is to transform specific regions of open land into trees.
// An open land region consists of open land cells that are
// connected horizontally or vertically.

// Any region of open land that is completely surrounded by trees
// on all four sides should be converted into a tree area by changing
// its designation to 'T'.

// The transformation rules are as follows:
// - If an open land cell ('O') is connected to other open land cells
//   horizontally or vertically, they form an open land region.
// - If an entire open land region is completely surrounded by tree
//   cells ('T') on all four sides (up, down, left, and right), then
//   all cells in this region should be changed to tree cells ('T').
// - Open land regions that are not completely surrounded by trees will remain unchanged.

// Implement a function `forestExpansion` that
// accepts a nested array grid representing the 2D map.
// The function should return the same grid, modified
// so that all open land regions surrounded by trees
// on all four sides are converted to trees.

// Example 1:

// Input:
// [
// ['T', 'T', 'O'],
// ['T', 'O', 'T'],
// ['T', 'T', 'T']
// ]

// Output:
// [
// ['T', 'T', 'O'],
// ['T', 'T', 'T'],
// ['T', 'T', 'T']
// ]

// Explanation:
// There are two distinct open land regions - cell (0, 2) and cell (1, 1).
// The region made up of cell (1, 1) is completely surrounded by trees,
// horizontally and vertically, so it's converted to a tree.


// Example 2:

// Input:
// [
// ['T', 'O', 'T'],
// ['O', 'O', 'O'],
// ['T', 'O', 'T']
// ]

// Output:
// [
// ['T', 'O', 'T'],
// ['O', 'O', 'O'],
// ['T', 'O', 'T']
// ]

// Explanation:
// There is only one open land region in this case made up of
// cells (0, 1), (1, 0), (1, 1), (1, 2), and (2, 1).
// This region is not fully surrounded by trees, so it remains unchanged.

// Algorithm
// First, we need to find all open land regions
//    Create adjacency list for each 'O' cell
//    If cell is 'O' and has path to a current region, add to that region
//    If cell is 'O' and does not have path to current region, make new region
// Next, we need to test if each land region is surrounded by trees
// We do this by checking if each cell is NOT on the edge - otherwise it must
// be next to either an 'O' in its region or a 'T'
// If all cells are NOT on the edge, convert all cells in region to 'T'

function forestExpansion(grid) {
  let adjList = getAdjList(grid);
  // console.log(adjList);
  let regions = getOpenLandRegions(adjList);
  // console.log(regions);
  updateGrid(regions, grid);
  // console.log(grid);
  return grid;
}

function updateGrid(regions, grid) {
  regions.forEach(region => {
    if (region.every(cell => {
      let x = Number(cell.slice(0, cell.indexOf(',')));
      let y = Number(cell.slice(cell.indexOf(',') + 1));
      if (x === 0 || y === 0 || x === grid.length - 1 || y === grid[0].length - 1) return false;
      return true;
    })) {
      region.forEach(cell => {
        let x = Number(cell.slice(0, cell.indexOf(',')));
        let y = Number(cell.slice(cell.indexOf(',') + 1));
        grid[x][y] = 'T';
      })
    }
  });
}

function getOpenLandRegions(adjList) {
  let regions = [];
  adjList.keys().forEach(cell => {
    findRegion(adjList, regions, cell);
  });
  return regions;
}

function findRegion(adjList, regions, cell) {
  if (regions.length === 0) {
    regions.push([cell]);
    return;
  }
  for (let idx = 0; idx < regions.length; idx += 1) {
    if (hasPath(adjList, regions[idx][0], cell)) {
      regions[idx].push(cell);
      return;
    }
  }
  regions.push([cell]);
}

function hasPath(adjList, src, dst) {
  function hasPathHelper(cur) {
    if (cur === dst) return true;
    let next = adjList.get(cur);
    if (seen.has(cur) || !next || next.length === 0) return false;
    seen.add(cur);
    return next.some(neighbor => hasPathHelper(neighbor));
  }
  let seen = new Set();
  return hasPathHelper(src);
}

function getAdjList(grid) {
  let adjList = new Map();
  grid.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell === 'T') return;
      adjList.set(`${x},${y}`, []);
      let neighbors = adjList.get(`${x},${y}`);
      if (cell === 'O') {
        if (x > 0 && grid[x - 1][y] === 'O') {
          neighbors.push(`${x - 1},${y}`);
        }
        if (x < grid.length - 1 && grid[x + 1][y] === 'O') {
          neighbors.push(`${x + 1},${y}`);
        }
        if (y > 0 && grid[x][y - 1] === 'O') {
          neighbors.push(`${x},${y - 1}`);
        }
        if (y < grid[0].length - 1 && grid[x][y + 1] === 'O') {
          neighbors.push(`${x},${y + 1}`);
        }
      }
    });
  });
  return adjList;
}

// Helper function for the test cases
function gridsAreEqual(grid1, grid2) {
  if (grid1.length !== grid2.length) return false;

  return grid1.every((row, i) => row.length === grid2[i].length && row.every((cell, j) => cell === grid2[i][j]));
}

// Test Cases:

const grid1 = [
['T', 'T', 'O'],
['T', 'O', 'T'],
['T', 'T', 'T']
]
const expected1 = [
['T', 'T', 'O'],
['T', 'T', 'T'],
['T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid1), expected1));

const grid2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];
const expected2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid2), expected2));

const grid3 = [
['T', 'T', 'T', 'T'],
['T', 'O', 'T', 'T'],
['T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T']
];
const expected3 = [
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid3), expected3));

const grid4 = [
['O', 'T', 'O', 'T'],
['T', 'O', 'T', 'O'],
['O', 'T', 'O', 'O']
];
const expected4 = [
['O', 'T', 'O', 'T'],
['T', 'T', 'T', 'O'],
['O', 'T', 'O', 'O']
];

console.log(gridsAreEqual(forestExpansion(grid4), expected4));

const grid5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'O', 'T', 'O', 'T'],
['T', 'O', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];
const expected5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];

console.log(gridsAreEqual(forestExpansion(grid5), expected5));