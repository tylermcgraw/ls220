/**
 * @param {number[]} height
 * @return {number}
 */

// Algorithm
// Define max to keep track of max area
// Set start pointer = 0, end = 1
// If area of start to end is greater than max, increase max
// If end = length - 1, increase start
// If start = end - 1, increase end
// if start + 1 > end + 1, increase start

function maxArea(height) {
  let max = 0;
  let start = 0;
  let end = 1;
  while (start < height.length - 1) {
    let area = (end - start) * Math.min(height[start], height[end]);
    if (area > max) max = area;
    if (end === height.length - 1 || (height[start + 1] > height[end + 1] && height[start + 1] > height[start]) && start + 1 < end) {
      start += 1;
    } else {
      end += 1;
    }
  }
  return max;
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected output: 49
console.log(maxArea([1,1])); // Expected output: 1
console.log(maxArea([4,3,2,1,4])); // Expected output: 16
console.log(maxArea([1,2,1])); // Expected output: 2
console.log(maxArea([1,8,6,2,5,4,8,25,7])); // Expected output: 49