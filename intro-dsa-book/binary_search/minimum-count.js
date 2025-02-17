// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.
function minimumCount(arr) {
  let min = Math.min(countNegatives(arr), countPositives(arr));
  console.log(min);
  return min;
}

function countNegatives(arr) {
  let arrLength = arr.length;
  if (arrLength === 0 || arr[0] > 0) {
    return 0;
  }
  let left = 0;
  let right = arrLength - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= 0 && arr[mid - 1] < 0) {
      return mid;
    } else if (arr[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

function countPositives(arr) {
  let arrLength = arr.length;
  if (arr.length === 0 || arr[arrLength] < 0) {
    return 0;
  }
  let left = 0;
  let right = arrLength - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] <= 0 && arr[mid + 1] > 0) {
      return arrLength - mid - 1;
    } else if (arr[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}