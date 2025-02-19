// Create a function `permutations` that takes an array of unique integers, `nums`, and
// returns all possible arrangements (permutations) of these numbers.

// The input array will contain at most 8 numbers.

// Example:

  // Input: [1,2,3]
  // Output: [
  //          [1, 2, 3],[1, 3, 2],[2, 1, 3],
  //          [2, 3, 1], [3, 1, 2], [3, 2, 1]
  //                                          ]

function permutations(array) {
  let arrayLength = array.length;
  let constructArray = [];
  function dfs(source, visited = new Set()) {
    if (!visited.has(source)) {
      visited.add(source);
      if (visited.size === arrayLength) {
        constructArray.push([...visited.values()]);
      } else {
        for (let num of array) {
          if (!visited.has(num)) {
            dfs(num, visited);
          }
        }
      }
      visited.delete(source);
    }
  }
  array.forEach(num => dfs(num));
  return constructArray;
}

function testPermutations(input, expectedLength) {
  const result = permutations(input);
  if (result.length !== expectedLength) return false;

  const stringifiedPerms = result.map(JSON.stringify);
  const uniquePerms = new Set(stringifiedPerms);
  return uniquePerms.size === expectedLength;
}

// Test Cases:

console.log(testPermutations([1,2,3], 6));
console.log(testPermutations([0,1], 2));
console.log(testPermutations([1], 1));
console.log(testPermutations([1,2,3,4], 24));
console.log(testPermutations([1,2,3,4,5], 120));
console.log(testPermutations([1,2,3,4,5,6], 720));
console.log(testPermutations([1,2,3,4,5,6,7], 5040));
console.log(testPermutations([1,2,3,4,5,6,7,8], 40320));
console.log(testPermutations([0,1,2,3,4,5,6,7,8,9], 3628800));

// Note: The order of permutations in the output doesn't matter,
// as long as all permutations are present.

// Don't run the last case for the naive-branch solution.
// If you do and your machine seems "stuck" press `CTRL+Z`