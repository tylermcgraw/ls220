// You are given an array of intervals, where each interval is represented
// by an array [start, end] indicating the start and end points. Your task
// is to merge all overlapping intervals and return an array of
// non-overlapping intervals that cover all the original intervals.


// Example 1:

// Input: intervals = [[2,5], [4,8], [10,12], [13,16]]
// Start: 2, 4, 10, 13
// End:   5, 8, 12, 16
// Output: [[2,8], [10,12], [13,16]]
// Explanation: Intervals [2,5] and [4,8] overlap, so they are merged into [2,8].

// Example 2:

// Input: intervals = [[3,6], [3,4], [5,8], [7,9]]
// Output: [[3,9]]
// Explanation: All intervals overlap and are merged into a single interval.

// For any two intervals, if x1 < y2 and x2 > y1
//                        or x1 > y2 and x2 < y1 (ignore - sort by starting #)
// Then these is an overlap: merge to min(x1, x2), max(y1, y2)

// [1,9], [2,5] -> [1,9]
// [1,5], [2,9] -> [1,9]
// [1,2], [5,9] -> [1,2], [5,9]

// Algorithm
// Sort intervals by starting number
// Keep track of current interval (start at 0)
// Compare the two intervals (current and current + 1)
// If they overlap
//    Add the merged interval to solution
//    Don't change current
// Else, add current interval to solution
//    Increase current by 1
// Repeat until current + 1 = intervals.length - 1

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let current = 0;
  while (current < intervals.length - 1) {
    if (intervals[current][1] >= intervals[current + 1][0]) {
      let newInterval = [
        intervals[current][0], 
        Math.max(intervals[current][1], intervals[current + 1][1])
      ];
      intervals.splice(current, 2, newInterval);
    } else {
      current += 1;
    }
  }
  return intervals;
}

// Test Cases
console.log(mergeIntervals([[7,8], [1,3], [6,11], [2,4]]));
// Expected: [[1,4], [6,11]]

console.log(mergeIntervals([[2,5], [4,8], [10,12], [13,16]]));
// Expected: [[2,8], [10,12], [13,16]]

console.log(mergeIntervals([[3,6], [3,4], [5,8], [7,9]]));
// Expected: [[3,9]]

console.log(mergeIntervals([[1,3], [5,7], [9,11]]));
// Expected: [[1,3], [5,7], [9,11]]

console.log(mergeIntervals([[1,4], [0,4]]));
// Expected: [[0,4]]

console.log(mergeIntervals([[1,4], [2,3]]));
// Expected: [[1,4]]

console.log(mergeIntervals([]));
// Expected: []

console.log(mergeIntervals([[1,4], [4,5]]));
// Expected: [[1,5]]