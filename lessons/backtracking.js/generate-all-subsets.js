// You are given an array of distinct integers. Your task is to generate all
// possible subsets of this array.

// A subset is a collection of elements from the array, where the order
// doesn't matter, and each element can either be included or not. The empty
// set is considered a subset of every array. Return all subsets of the
// given array. The order of subsets in the output doesn't matter.

// Example 1:
// Input: [5]
// Output: [[],[5]]
// Explanation:
// For a single-element array, there are only two subsets: the empty set and the set containing the element.

// Example 2:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
// Explanation: This represents all possible subsets, from the empty set to the full set.

// Recursive
// Base case: if subset = [], add to solution and return

// Ex. [1,2,3] -> [1,2], [1,3], [2,3]
// [1,2] -> [1], [2]
// [1,3] -> [3]    (skip [1])
// [2,3] -> (skip [2] and [3])
// [1] -> []
// [2] -> (skip [])
// [3] -> (skip [])
// Find all subsets... use set?

// Iterative - stack
// Start at [], add [] to solutions and set equal to current
// At each stage, add [1], [2], and [3] to current if new num is greater
// than last num in current

// Ex. [] -> [1], [2], [3]
// [1] -> [1,2], [1,3] (new elements, 2+3, are > 1)
// [2] -> [2,3] (3 > 1)
// [3] -> 1,2,3 are not greater than 3
// [1,2] -> [1,2,3]
// [1,3] -> skip
// [2,3] -> skip

function generateSubsets(nums) {
  let solution = [];
  let stack = [[]];
  while (stack.length > 0) {
    let current = stack.pop();
    solution.push([...current]);
    let curlen = current.length;
    nums.forEach(num => {
      if (curlen === 0 || current[curlen - 1] < num) {
        stack.push(current.concat(num));
      }
    });
  }
  console.log(solution);
  return solution;
}

function testGenerateSubsets(nums, expected) {
    const result = generateSubsets(nums);
    if (result.length !== expected.length) return false;

    const stringifySubset = subset => subset.sort((a, b) => a - b).join(',');
    const resultSet = new Set(result.map(stringifySubset));
    const expectedSet = new Set(expected.map(stringifySubset));

    return resultSet.size === expectedSet.size &&
           [...resultSet].every(item => expectedSet.has(item));
}

console.log(testGenerateSubsets([1,2,3], [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]));
console.log(testGenerateSubsets([5], [[],[5]]));
console.log(testGenerateSubsets([1,2], [[],[1],[2],[1,2]]));
console.log(testGenerateSubsets([1,2,3,4], [[],[1],[2],[3],[4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[1,2,3],[1,2,4],[1,3,4],[2,3,4],[1,2,3,4]]));
console.log(testGenerateSubsets([-1,0,1], [[],[-1],[0],[1],[-1,0],[-1,1],[0,1],[-1,0,1]]));
console.log(testGenerateSubsets([1,2,3,4,5], [
[],[1],[2],[3],[4],[5],
[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],[3,4],[3,5],[4,5],
[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5],
[1,2,3,4],[1,2,3,5],[1,2,4,5],[1,3,4,5],[2,3,4,5],
[1,2,3,4,5]
]));