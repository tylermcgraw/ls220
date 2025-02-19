// You are provided with an 'm x n' 2D grid map where each cell
// is either marked as a tree ('T') or open land ('O'). Your task
// is to find the largest contiguous forest area on the map. A 
// forest area consists of a group of tree cells ('T') connected
// 4-directionally (horizontally or vertically, but not diagonally).

// Write a function largestForestArea that accepts a nested
// array grid representing the 2D map. The function should
// return the size of the largest forest area, which is the
// number of contiguous 'T' cells in the largest forest.
// If there are no trees in the grid, return 0.

// Example:
// Input:
// [
//   ['O', 'T', 'O', 'O'],
//   ['T', 'T', 'O', 'T'],
//   ['O', 'O', 'O', 'T'],
//   ['O', 'O', 'T', 'T']
// ]
// Output: 4 (The largest forest area has 4 connected tree cells)

function largestForestArea(grid) {
  let adjList = getAdjList(grid);
  let forests = [];
  adjList.keys().forEach(coord => {
    let isInForest = false;
    for (let idx = 0; idx < forests.length; idx += 1) {
      if (hasPath(adjList, coord, forests[idx][0])) {
        forests[idx].push(coord);
        isInForest = true;
      }
    }
    if (!isInForest) {
      forests.push([coord]);
    }
  });
  return forests.reduce((acc, forest) => forest.length > acc ? forest.length : acc, 0);
}

function hasPath(adjList, src, dst) {
  let queue = [src];
  let visited = new Set([src]);

  while (queue.length !== 0) {
    let current = queue.shift();
    let neighbors = adjList.get(current);
    if (neighbors) {
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  return visited.has(dst);
}

function getAdjList(grid) {
  let adjList = new Map();
  const ROWS = grid.length;
  if (ROWS === 0) return adjList;
  const COLS = grid[0].length;
  grid.forEach((row, x) => {
    row.forEach((_, y) => {
      if (grid[x][y] === 'T') {
        let coords = `${x},${y}`;
        let current = adjList.get(coords);
        if (current === undefined) {
          adjList.set(coords, []);
          current = adjList.get(coords);
        }
        if (x + 1 < ROWS && grid[x + 1][y] === 'T') {
          let neighborCoords = `${x + 1},${y}`;
          let neighbor = adjList.get(neighborCoords);
          if (neighbor === undefined) {
            adjList.set(neighborCoords, []);
            neighbor = adjList.get(neighborCoords);
          }
          current.push(neighborCoords);
          neighbor.push(coords);
        }
        if (y + 1 < COLS && grid[x][y + 1] === 'T') {
          let neighborCoords = `${x},${y + 1}`;
          let neighbor = adjList.get(neighborCoords);
          if (neighbor === undefined) {
            adjList.set(neighborCoords, []);
            neighbor = adjList.get(neighborCoords);
          }
          current.push(neighborCoords);
          neighbor.push(coords);
        }
      }
    });
  });
  return adjList;
}


// Test cases
const grid1 = [];
console.log(largestForestArea(grid1) === 0);

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(largestForestArea(grid2) === 0);

const grid3 = [
  ['T', 'T', 'O'],
  ['T', 'T', 'O'],
  ['O', 'O', 'O']
];
console.log(largestForestArea(grid3) === 4);

const grid4 = [
  ['O', 'O', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(largestForestArea(grid4) === 4);

const grid5 = [
  ['T', 'T', 'T'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
];
console.log(largestForestArea(grid5) === 8);

const grid6 = [
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T']
];
console.log(largestForestArea(grid6) === 1);

const grid7 = [
  ['T', 'T', 'T'],
  ['T', 'T', 'T'],
  ['T', 'T', 'T']
];
console.log(largestForestArea(grid7) === 9);

const grid8 = [
  ['O', 'T', 'O', 'T', 'T'],
  ['O', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'T', 'O', 'O'],
  ['O', 'O', 'T', 'T', 'T'],
  ['T', 'O', 'T', 'T', 'T']
];
console.log(largestForestArea(grid8) === 7);

const grid9 = [
  ['T', 'O', 'T', 'T'],
  ['O', 'T', 'O', 'T'],
  ['T', 'T', 'O', 'O'],
  ['O', 'T', 'T', 'T']
];
console.log(largestForestArea(grid9) === 6);

const grid10 = [
  ['O', 'T', 'O', 'O'],
  ['T', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'T'],
  ['O', 'O', 'T', 'T']
];
console.log(largestForestArea(grid10) === 4);

const grid11 = [
  ['O', 'T', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'T']
];
console.log(largestForestArea(grid11) === 7);

// All test cases should log true