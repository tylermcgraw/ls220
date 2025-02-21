// Write a function named findTruckCapacity that determines
// the optimal capacity for a delivery truck to transport
// a series of orders within a given number of trips.

// The function takes two parameters:
// 1. An array of positive integers orderVolumes, where each
// element represents the volume of an order in cubic meters.
// 2. A positive integer maxTrips, representing the maximum
// number of trips the truck can make.

// The truck must deliver orders in the sequence they appear
// in the orderVolumes array. On each trip, the truck is
// loaded with as many consecutive orders as possible without
// exceeding its capacity. The function should return the
// minimum truck capacity in cubic meters.

// Example:
// Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
// Output: 14
// Explanation: A truck with 14 cubic meters capacity can
//              deliver all orders in 3 trips:
// Trip 1: 6 + 3 = 9 cubic meters
// Trip 2: 8 + 2 = 10 cubic meters
// Trip 3: 5 + 4 + 5 = 14 cubic meters

// binary search on sum of volumes (left = 0, right = sum)
// if capacity is valid, try on left half
// else, try on right half

function findTruckCapacity(orderVolumes, maxTrips) {
  let minCapacity = Infinity;
  let left = 1;
  let right = orderVolumes.reduce((acc, capacity) => acc + capacity);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isValidCapacity(orderVolumes, maxTrips, mid)) {
      minCapacity = Math.min(minCapacity, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return minCapacity;
}

function isValidCapacity(orderVolumes, maxTrips, capacity) {
  let order = currentLoad = 0;
  let trips = 1;
  while (order < orderVolumes.length) {
    let currentVolume = orderVolumes[order];
    if (currentVolume > capacity) return false;
    if (currentLoad + currentVolume <= capacity) {
      currentLoad += currentVolume;
    } else {
      currentLoad = currentVolume;
      trips += 1;
    }
    order += 1;
  }
  return trips <= maxTrips;
}

console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);
console.log(findTruckCapacity([1, 1, 1, 1000], 3) === 1000);