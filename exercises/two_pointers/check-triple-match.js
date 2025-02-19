function checkTripleMatch(arr) {
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    let result = arr[left] * 3 - arr[right]
    if (result === 0) {
      return true;
    } else if (result > 0) {
      right += 1;
    } else {
      left += 1;
    }
  }
  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.