// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`. The
// function should return the length of this subarray.
// If no such subarray exists, return 0.

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this
//              subarray is 2.

// Algorithm
// start/end pointers at 0, keep track of running sum, current shortest subarray
// add end num to running total
// if too big, decrease total by start num and increase start
// if too small, increase end and increase total by end num
// if equal to target, add end - start + 1 to shortest subarray
//   increase start by 1 unless start = end, then break (can't be < 1)

function minLengthForTargetSum(nums, target) {
  let shortestSubarray = Infinity;
  let start = 0;
  let end = 0;
  let runningTotal = nums[start];
  while (end < nums.length) {
    if (runningTotal > target) {
      runningTotal -= nums[start];
      if (start === end) {
        end += 1;
      }
      start += 1;
    } else if (runningTotal < target) {
      end += 1;
      if (end < nums.length) {
        runningTotal += nums[end];
      }
    } else {
      let subarrayLength = end - start + 1;
      if (subarrayLength < shortestSubarray) {
        shortestSubarray = subarrayLength;
      }
      if (subarrayLength === 1) {
        break;
      } else {
        runningTotal -= nums[start];
        start += 1;
      }
    }
  }
  if (shortestSubarray === Infinity) shortestSubarray = 0;
  return shortestSubarray;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true