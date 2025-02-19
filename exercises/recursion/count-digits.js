function countDigits(num) {
  num = Math.floor(num / 10);
  if (num === 0) {
    return 1;
  }
  return countDigits(num) + 1;
}

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.