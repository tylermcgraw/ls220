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

// Naive Algorithm
// Find all substrings - O(N^2)
// Filter all substrings with repeats - O(N^2)
// Return length of longest substring - O(N)?

// Algorithm 1
// Keep track of repeats in a map (char -> bool)
// Keep track of longest substring (start at 0)
// Set start and end to 0
// while end < strlen
// if no repeats, check longest substring, increase end
// if repeats, increase start

function longestSubstringLength(string) {
  let chars = new Map();
  let maxLength = 0;
  let start = end = 0;
  while (end < string.length) {
    let repeatIdx = chars.get(string[end]);
    if (repeatIdx >= start) {
      start = repeatIdx + 1;
    }
    maxLength = Math.max((end - start + 1), maxLength);
    chars.set(string[end], end);
    end += 1;
  }
  return maxLength;
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