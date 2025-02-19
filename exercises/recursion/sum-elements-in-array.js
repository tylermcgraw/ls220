function sum(array) {
  if (array.length === 0) return 0;
  function sumHelper(idx) {
    if (idx === 0) {
      return array[idx];
    }
    return array[idx] + sumHelper(idx - 1);
  }
  return sumHelper(array.length - 1);
}

console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.