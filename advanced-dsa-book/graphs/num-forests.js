// You are provided with a 2D grid map where each cell is either
//  marked as a tree ('T') or open land ('O'). Your goal is to
// count the number of distinct forest regions on the map. A forest
// region consists of a contiguous group of tree cells ('T'). For
// this problem, two tree cells are considered connected if they
// share an edge horizontally or vertically, but not diagonally.

// Write a function numOfForests that accepts a nested array grid
// representing the 2D map. The function should return the total
// number of forest regions in the grid.

function numOfForests(grid) {
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
  console.log(forests);
  return forests.length;
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

const grid1 = [];
console.log(numOfForests(grid1) === 0);

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid2) === 0);
const grid3 = [
  ['T', 'T', 'O'],
  ['T', 'T', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid3) === 1);
const grid4 = [
  ['O', 'O', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(numOfForests(grid4) === 3);

const grid5 = [
  ['T', 'T', 'T'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid5) === 1);

const grid6 = [
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T']
];
console.log(numOfForests(grid6) === 9);

const grid7 = [
  ['T', 'T', 'T'],
  ['T', 'T', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid7) === 1);

// All test cases should log true