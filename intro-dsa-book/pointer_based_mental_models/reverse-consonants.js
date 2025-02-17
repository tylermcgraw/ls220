// naive implementation
// function reverseConsonants(str) {
//   let consonants = str.match(/[^aeiou]/gi);
//   if (!consonants) return str;
//   let idx = consonants.length - 1;
//   return str.split('').map(char => {
//     if (/[^aeiou]/i.test(char)) {
//       return consonants[idx--];
//     }
//     return char;
//   }).join('');
// }

// pointer-based implementation
function reverseConsonants(str) {
  if (str.length < 2) return str;
  let newStr = [];
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (isVowel(str[start])) {
      newStr[start] = str[start];
      start += 1;
    }
    if (isVowel(str[end])) {
      newStr[end] = str[end]
      end -= 1;
    }
    if (!isVowel(str[start]) && !isVowel(str[end])) {
      newStr[start] = str[end];
      newStr[end] = str[start];
      start += 1;
      end -= 1;
    }
  }
  return newStr.join('');
}

function isVowel(char) {
  return /[aeiou]/i.test(char);
}

// Given a string `str`, reverse all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, 
// `'i'`, `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true