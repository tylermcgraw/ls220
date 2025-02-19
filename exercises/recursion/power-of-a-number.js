function power(x, n) {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    return power(x, n - 1) * x;
  } else {
    return power(x, n + 1) / x;
  }
}

console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(7, 2) === 49);
console.log(power(10, 1) === 10);
console.log(power(10, -1) === .1);
console.log(power(10, -5));

// All test cases should log true.