function findNextLetter(chars, key) {
  function findNextLetterHelper(start, end) {
    let mid = Math.floor((start + end) / 2);
    if (start === end) {
      if (chars[mid] > key) return chars[start];
      return chars[0];
    }
    if (chars[mid] > key) {
      return findNextLetterHelper(start, mid);
    }
    return findNextLetterHelper(mid + 1, end);
  }
  return findNextLetterHelper(0, chars.length - 1)
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.