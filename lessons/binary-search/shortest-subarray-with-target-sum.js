// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`.
// The function should return the length of this
// subarray. If no such subarray exists, return 0.

// The time complexity of your solution should be O(NlogN).

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this subarray is 2.

// Algorithm
// binary search on length of array
// mid = length / 2
// if there is a subarray of length mid that works, check smaller subarrays
// else check larger subarrays

function minLengthForTargetSum(nums, target) {
  let result = 0;
  let minLength = 1;
  let maxLength = nums.length;
  while (minLength <= maxLength) {
    let midLength = Math.floor((minLength + maxLength) / 2);
    if (subarrayHasTarget(nums, target, midLength)) {
      result = midLength;
      maxLength = midLength - 1;
    } else {
      minLength = midLength + 1;
    }
  }
  return result;
}

function subarrayHasTarget(nums, target, length) {
  let sum = 0;
  for (let idx = 0; idx < length; idx += 1) {
    sum += nums[idx];
  }
  let left = 0;
  let right = length - 1;
  while (right < nums.length) {
    if (sum >= target) return true;
    sum -= nums[left];
    left += 1;
    right += 1;
    sum += nums[right];
  }
  return false;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);
// 1, 2, 2, 2, 4, 5
// 3, 5, 2, 1, 0, 4

// All test cases should log true