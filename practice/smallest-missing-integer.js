// javascript

/**
 * Write a function named `findSmallestMissing` that takes a sorted array
 * of distinct positive integers as input. The function should return the
 * smallest positive integer that is not present in the array.
 * 
 * Constraints:
 * - The array is sorted in ascending order
 * - All integers in the array are positive and distinct
 * - The array may be empty
 * - Use binary search to solve this problem
 * - The time complexity should be O(log n)
 * 
 * @param {number[]} nums - A sorted array of distinct positive integers
 * @return {number} - The smallest missing positive integer
 */

// Algorithm
// If nums is an empty array, return 1

function findSmallestMissing(nums) {
  if (nums.length === 0 || nums[0] > 1) return 1;
  
  let left = 0;
  let right = nums.length;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > mid + 1) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left + 1;
}

/*
function findSmallestMissing(nums) {
  if (nums.length === 0) return 1;
  let first = 0;
  let last = nums.length - 1;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (last - first === 0) {
      if (nums[last] === 1) return 2;
      return 1;
    }
    if (last - first === 1) {
      if (nums[last] - nums[first] > 1) {
        return nums[last] - 1;
      } else if (last === nums.length - 1) {
        return nums[last] + 1;
      } else {
        return 1;
      }
    }
    if (nums[mid] > mid + 1) {
      last = mid;
    } else {
      first = mid;
    }
  }
}
*/

// Test cases
console.log(findSmallestMissing([1, 2, 3, 4, 5, 6])); // Expected output: 7
console.log(findSmallestMissing([1, 2, 3, 4, 6, 7, 8])); // Expected output: 5
console.log(findSmallestMissing([1, 2, 3, 4, 6, 7])); // Expected output: 5
console.log(findSmallestMissing([2, 3, 4, 5, 6])); // Expected output: 1
console.log(findSmallestMissing([])); // Expected output: 1
console.log(findSmallestMissing([2])); // Expected output: 1
console.log(findSmallestMissing([1])); // Expected output: 2
console.log(findSmallestMissing([1, 3, 4, 5, 6, 7, 8])); // Expected output: 2