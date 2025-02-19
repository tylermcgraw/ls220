function reverseString(str) {
  function reverseStringHelper(left, right) {
    if (right < left) return '';
    if (left === right) {
      return str[left];
    }
    return str[right] + reverseStringHelper(left + 1, right - 1) + str[left];
  }
  return reverseStringHelper(0, str.length - 1);
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.