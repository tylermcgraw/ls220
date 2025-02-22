// You are given two strings. Your task is to find the length of
// the longest subsequence that is shared between both strings.

// A subsequence is a sequence that can be derived from another
// sequence by deleting some or no elements without changing the
// order of the remaining elements. For example, "ace" is a
// subsequence of "abcde".

// Implement a function `longestSharedSubsequence` that takes
// two strings as input and returns the length of the longest
// shared subsequence between them.

// Example 1:
// Input: str1 = "abcde", str2 = "ace"
// Output: 3
// Explanation: The longest shared subsequence is "ace" and its length is 3.

// Example 2:
// Input: str1 = "abcbdab", str2 = "bdcaba"
// Output: 4
// Explanation: There are three shared subsequences with length 4.
//              'bcab', 'bcba', and 'bdab'.

// Example 3:
// Input: str1 = "xmjyauz", str2 = "mzjawxu"
// Output: 4
// Explanation: The longest shared subsequence is "mjau".

// Iterative
// Filter out letters that appear in one string but not the other
// If strings are equal, return their length
// Map substring to index of last char in s1
// Add to map all substrings of length 1 in s2 that are also substrings in s1
// Repeat with substrings of increasing length

// Recursive
// Filter out letters that appear in one string but not the other
// If strings are equal, return their length
// Recursively call fx on substrings of s2
// If substr is in set, return length
// If substr is valid, add to set
// Else, recurse on smaller substrs

function longestSharedSubsequence(s1, s2) {
  s1 = s1.split('').filter(char => s2.includes(char)).join('');
  s2 = s2.split('').filter(char => s1.includes(char)).join('');
  if (s1 === s2) return s1.length;
  let subsequences = new Set();
  subsequences.add('', 0);
  function longestSharedSubsequenceHelper(s2substr) {
    if (subsequences.has(s2substr)) {
      return s2substr.length;
    }
    if (isSubsequence(s2substr, s1)) {
      subsequences.add(s2substr);
      return s2substr.length;
    }
    let allSubstrs = [];
    for (let idx = 0; idx < s2substr.length; idx += 1) {
      let substr = s2substr[0, idx] + s2substr[idx + 1, s2substr.length];
      allSubstrs.push(longestSharedSubsequenceHelper(substr))
    }
    return Math.max(...allSubstrs);
  }
  return longestSharedSubsequenceHelper(s2);
}

function isSubsequence(substr, str) {
  let substrIdx = 0;
  let strIdx = 0;
  while (strIdx < str.length && substrIdx < substr.length) {
    if (substr[substrIdx] === str[strIdx]) {
      substrIdx += 1;
    }
    strIdx += 1;
  }
  return substrIdx === substr.length;
}

// Test cases
console.log(longestSharedSubsequence("abcde", "ace") === 3);
console.log(longestSharedSubsequence("abcbdab", "bdcaba") === 4);
console.log(longestSharedSubsequence("xmjyauz", "mzjawxu") === 4);
console.log(longestSharedSubsequence("abcdgh", "aedfhr") === 3);
console.log(longestSharedSubsequence("aggtab", "gxtxayb") === 4);
console.log(longestSharedSubsequence("aaaa", "aa") === 2);
console.log(longestSharedSubsequence("aaaa", "bb") === 0);
console.log(longestSharedSubsequence("", "abcd") === 0);
console.log(longestSharedSubsequence("abcd", "") === 0);
console.log(longestSharedSubsequence("", "") === 0);
console.log(longestSharedSubsequence("a", "a") === 1);
console.log(longestSharedSubsequence("zyxwvutsrqp", "abcdefghijklmnop") === 1);
console.log(longestSharedSubsequence("abcabcabc", "acbacbacb") === 6);
console.log(longestSharedSubsequence("aaaaabbbbb", "bbbbbaaaaa") === 5);
console.log(longestSharedSubsequence("abcdabcdabcd", "abcdabcdabcd") === 12);

// All test cases should log true