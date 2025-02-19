function findAverages(nums, k) {
  let averages = [];
  let length = nums.length;
  let start = 0;
  while (start + k <= length) {
    let sum = 0;
    for (let idx = start; idx < start + k; idx += 1) {
      sum += nums[idx];
    }
    start += 1;
    averages.push(sum / k);
  }
  return averages;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]