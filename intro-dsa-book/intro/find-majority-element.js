function findMajority(list) {
  let max = list[0];
  let counts = new Map();
  list.forEach(num => {
    let count = counts.get(num);
    if (count === undefined) {
      counts.set(num, 1);
    } else {
      counts.set(num, count + 1);
    }
    if (counts.get(max) < counts.get(num)) {
      max = num;
    }
  });
  return max;
}


// ---- PROBLEM ----
// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

// ----  DATA STRUCTURE ----
// Map: number in list -> number of times seen

// ---- ALGORITHM ----
// Create variable keeping track of max
// Iterate over each number in list
// Add to map with value of 0 or increase value by 1
// Check if number is max - update max if so

// ---- TEST CASES ----

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true