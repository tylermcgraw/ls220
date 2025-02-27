function countPairs(nums, target) {
  let numPairs = 0;
  let length = nums.length;
  let start = 0;
  let end = 0;
  while (end < nums.length) {
    if (nums[start] + nums[end] > target) {
      numPairs += length - end;
      start += 1;
      end = start + 1;
    } else {
      if (end === nums.length - 1) {
        start += 1;
        end = start + 1;
      } else {
        end += 1;
      }
    }
  }
  return numPairs;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) === 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) === 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) === 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) === 0);
// No pairs