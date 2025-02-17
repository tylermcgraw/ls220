// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]

function findRange(array) {
  return [findIndex(array, true), findIndex(array, false)];
}

function findIndex(array, findStart) {
  let left = 0;
  let right = array.length - 1;
  let boundary = findStart ? -1 : 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === 3 && array[mid + boundary] !== 3) {
      return mid;
    } else if (array[mid] < 3 || array[mid] === 3 && !findStart) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRange([1, 2, 5, 5, 6, 9, 10])); // [-1, -1]