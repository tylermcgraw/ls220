// O(NlogN) to sort + O(N) to search = O(NlogN)
function twoSumLessThanTarget(nums, target) {
  quicksort(nums);
  let maxSum = -1;
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum >= target) {
      end -= 1;
    } else {
      if (sum > maxSum) {
        maxSum = sum;
      }
      start += 1;
    }
  }
  return maxSum;
}

function quicksort(nums, left = 0, right = nums.length - 1) {
  const L = left;
  const R = right;
  let partition = nums[L];
  left += 1;
  while (left <= right) {
    if (nums[left] > partition && nums[right] < partition) {
      [ nums[left], nums[right] ] = [ nums[right], nums[left] ];
      left += 1;
      right -= 1;
      continue;
    }
    if (nums[left] < partition) {
      left += 1;
    }
    if (nums[right] > partition) {
      right -= 1;
    }
  }
  [ nums[L], nums[right] ] = [ nums[right], nums[L] ];
  if (L < right - 1) quicksort(nums, L, right - 1);
  if (R > right + 1) quicksort(nums, right + 1, R);
}

/*
// O(N^2)
function twoSumLessThanTarget(nums, target) {
  let maxSum = -1;
  for (let start = 0; start < nums.length - 1; start += 1) {
    for (let end = start + 1; end < nums.length; end += 1) {
      let sum = nums[start] + nums[end];
      if (sum > maxSum && sum < target) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}
*/

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true