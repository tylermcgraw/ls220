function findPair(list) {
  let listLength = list.length;
  for (let firstIdx = 0; firstIdx < listLength - 1; firstIdx += 1) {
    let firstNum = list[firstIdx];
    for (let secondIdx = firstIdx + 1; secondIdx < listLength; secondIdx += 1) {
      let secondNum = list[secondIdx];
      if (firstNum + secondNum === 10) {
        return [firstNum, secondNum];
      }
    }
  }
  return null;
}

/*
-- PROBLEM --
Given a list of numbers, find two numbers in the list that add up to ten
and return them. If no such pair exists, return null.

It is guaranteed that there is either exactly one pair of numbers
that satisfies the condition, or no pairs at all.

Input: list of numbers
Output: null or list of 2 numbers

-- DATA STRUCTURE --
Array

-- ALGORITHM --
Loop through each number in the list (first num in pair)
  Loop through remaining numbers in list (second num in pair)
    Check if pair sums to 10 (return pair if so)
If we reach the end of the loop without finding a pair, return null

-- TEST CASES --
*/
console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]