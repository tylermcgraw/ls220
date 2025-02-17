// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

const STACK = require("./stack-with-linked-list.js");
const MATCHING_BRACKETS = {
  ')': '(',
  ']': '[',
  '}': '{'
}

function areMatched(str) {
  let bracketStack = new STACK;
  str.split('').forEach(char => {
    let top = bracketStack.peek();
    if (top === MATCHING_BRACKETS[char]) {
      bracketStack.pop();
    } else {
      bracketStack.push(char);
    }
  });
  return bracketStack.peek() === null;
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false