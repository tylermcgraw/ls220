// Write a function `rooms` that determines the minimum number of
// rooms required to handle a series of interviews given their
// time intervals.

// Each interval is represented as an array [start, end],
// where `start` is the start time and `end` is the end
// time of the interview.

// The function should return the number of conference rooms
// required to ensure no two interviews overlap in the same room.

// Example I:
// Input: intervals = [[20, 25], [10, 15], [0, 25]]
// Output: 2
// Explanation: The first interview is scheduled from
//              time 0 to 25. The second interview is
//              from time 10 to 15 and overlaps with
//              the first interview, requiring a second
//              room. The third interview from 20 to 25
//              also overlaps with the first. Thus, a
//              minimum of two rooms are required.

// Example II:
// Input: intervals = [[5, 9], [1, 3]]
// Output: 1
// Explanation: The first interview is scheduled from
//              time 5 to 9. The second interview is
//              from time 1 to 3. These two interviews
//              do not overlap, therefore only one
//              conference room is needed.

// Algorithm
// Create array of sorted inputs - O(NlogN)
// Create array of sorted outputs - O(NlogN)
// Use anchor/runner to check max # rooms - O(N)

function rooms(intervals) {
  let inputs = []
  let outputs = [];
  intervals.forEach(interval => {
    inputs.push(interval[0]);
    outputs.push(interval[1]);
  });
  inputs.sort((a, b) => a - b);
  outputs.sort((a, b) => a - b);
  
  let maxRooms = 0;
  let inputIdx = 0;
  let outputIdx = 0;
  while (inputIdx < intervals.length) {
    if (inputs[inputIdx] < outputs[outputIdx]) {
      maxRooms = Math.max(maxRooms, (inputIdx - outputIdx + 1));
      inputIdx += 1;
    } else {
      outputIdx += 1;
    }
  }
  return maxRooms;
}

// Test Cases:

console.log(rooms([[20, 25], [10, 15], [0, 25]]) === 2);
//  0, 10, 20
// 15, 25, 25
console.log(rooms([[5, 9], [1, 3]]) === 1);
// 1, 5
// 3, 9
console.log(rooms([[1, 2], [3, 4], [5, 6]]) === 1);
// 1, 3, 5
// 2, 4, 6
console.log(rooms([[1, 4], [2, 5], [3, 6]]) === 3);
console.log(rooms([[1, 3], [3, 6], [6, 8]]) === 1);
console.log(rooms([[1, 10]]) === 1);
console.log(rooms([[1, 3], [2, 4], [4, 6]]) === 2);
// 1, 2, 4
// 3, 4, 6
console.log(rooms([[1, 3], [2, 3], [4, 6]]) === 2);
// 1, 2, 4
// 3, 3, 6
console.log(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) === 2);
console.log(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) === 3);
// 0, 1, 2, 4, 5, 8
// 3, 5, 6, 7, 9, 10
console.log(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]) === 1);
console.log(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]) === 2);
console.log(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) === 4);
// All test cases should log true