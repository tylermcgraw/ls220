function countPairs(nums, target) {
  let length = nums.length;
  let count = 0;
  let left = 0;
  let right = length - 1;
  while (right > 0) {
    let sum = nums[left] + nums[right];
    if (sum > target) {
      count += right - left;
      right -= 1;
    } else if (left + 1 < right) {
      left += 1;
    } else {
      break;
    }
  }
  return count;
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