// You're a clever thief planning a heist in a neighborhood
// where houses are arranged in a line. Each house contains a
// certain amount of valuable loot. However, the houses have a
// unique security system: if two adjacent houses are robbed, it
// triggers a neighborhood-wide alarm.

// Given an array of integers representing the value of loot in
// each house, determine the maximum amount of loot you can
// steal without triggering the alarm system.


// Example 1:
// Input: houses = [3,1,4,1,5]
//                  3,1,7,4,12
// Output: 12
// Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
// Total loot stolen = 3 + 4 + 5 = 12.

// Example 2:
// Input: houses = [6,2,7,9,3,1]
//                 6,2,13,15,16,16
// Output: 16
// Explanation: Rob house 1 (loot = 6), house 3 (loot = 7), and house 5 (loot = 3).
// Total loot stolen = 6 + 7 + 3 = 16.

// Max at house n = max(house 1, 2, ...n-2) + house n
// Max at house 1 = house 1
// Max at house 2 = house 2
// Max at house 3 = house 1+3

function maximizeLoot(houses) {
  let maxLoot = [];
  maxLoot[-1] = 0;
  maxLoot[0] = houses[0];
  maxLoot[1] = houses[1];
  if (houses.length < 2) return maxLoot[houses.length - 1];
  function maximizeLootHelper(houseNumber) {
    if (maxLoot[houseNumber] !== undefined) {
      return Math.max(maxLoot[houseNumber], maxLoot[houseNumber - 1]);
    }
    let loot = maximizeLootHelper(houseNumber - 2) + houses[houseNumber];
    maxLoot[houseNumber] = loot;
    maxLoot[houseNumber - 1] = Math.max(maximizeLootHelper(houseNumber - 1), maxLoot[houseNumber - 2]);
    return Math.max(loot, maxLoot[houseNumber - 1]);
  }
  return maximizeLootHelper(houses.length - 1);
}

// Test cases
console.log(maximizeLoot([3,1,4,1,5]) === 12);
console.log(maximizeLoot([6,2,7,9,3,1]) === 16);
console.log(maximizeLoot([2,1,1,2]) === 4);
console.log(maximizeLoot([1,2,3,1]) === 4);
console.log(maximizeLoot([2,7,9,3,1]) === 12);
console.log(maximizeLoot([1,1,1,1,1,1,1,1,1,1]) === 5);
console.log(maximizeLoot([10,1,1,10]) === 20);
console.log(maximizeLoot([5,3,4,11,2]) === 16);
console.log(maximizeLoot([1]) === 1);
console.log(maximizeLoot([]) === 0);

// All test cases should log true