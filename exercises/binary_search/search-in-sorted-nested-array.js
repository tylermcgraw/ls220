function findInNestedArray(matrix, target) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  function findInNestedArrayHelper(start, end) {
    let mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / COLS);
    let col = mid % COLS;
    if (start === end) {
      return target === matrix[row][col];
    } else if (target > matrix[row][col]) {
      return findInNestedArrayHelper(mid + 1, end);
    }
    return findInNestedArrayHelper(start, mid);
  }
  return findInNestedArrayHelper(0, ROWS * COLS - 1);
}

// example
// [ [1,2], [3,4], [5,6] ]
// ROWS = 3, COLS = 2
// start = 0 (1), end = 5 (6)
// mid = 2
// row = 1 (0,1 -> 0) (2,3-> 1) (4,5 -> 2)
// col = 1 (0,2,4 -> 0) (1,3,5 -> 1)

/*
function findInNestedArray(matrix, target) {
  function findInNestedArrayHelper(arrStart, arrEnd, subarrStart, subarrEnd) {
    if (arrStart === arrEnd) {
      let subarrMid = Math.floor((subarrStart + subarrEnd) / 2);
      if (target === matrix[arrStart][subarrMid]) {
        return true;
      } else if (subarrStart === subarrEnd) {
        return false;
      } else if (target < matrix[arrStart][subarrMid]) {
        return findInNestedArrayHelper(arrStart, arrEnd, subarrStart, subarrMid);
      } else {
        return findInNestedArrayHelper(arrStart, arrEnd, subarrMid + 1, subarrEnd);
      }
    }
    let arrMid = Math.floor((arrStart + arrEnd) / 2);
    if (target > matrix[arrMid][subarrEnd]) {
      return findInNestedArrayHelper(arrMid + 1, arrEnd, subarrStart, subarrEnd);
    } else if (target < matrix[arrMid][subarrStart]) {
      return findInNestedArrayHelper(arrStart, arrMid, subarrStart, subarrEnd);
    } else {
      return findInNestedArrayHelper(arrMid, arrMid, subarrStart, subarrEnd);
    }
  }
  return findInNestedArrayHelper(0, matrix.length - 1, 0, matrix[0].length - 1);
}
*/

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.