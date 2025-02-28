// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

// Algorithm
// If string length is 0/1, return 0/1
// Use charIndexes Map to keep track of index of each letter
// Set longest = 1;
// Set start = 0, end = 1
// While end < string.length
// If end is not a duplicate, end++, check if longest > end-start
// Else, start = index of duplicate + 1

function longestSubstringLength(string) {
  const length = string.length;
  if (length < 2) return length;
  let charIndexes = new Map();
  let longest = 1;
  let start = 0;
  let end = 0;
  while (end < length) {
    let charIndex = charIndexes.get(string[end]);
    if (charIndex !== undefined && charIndex >= start) {
      start = charIndex + 1;
      if (start >= end) end += 1;
    } else {
      if (end - start + 1 > longest) longest = end - start + 1;
      end += 1;
    }
    charIndexes.set(string[end - 1], end - 1);
  }
  return longest;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);