function assignTreats(appetite, treats) {
  appetite.sort((a, b) => a - b);
  treats.sort((a, b) => a - b);
  let satisfiedPets = 0;
  let biggestAppIdx = appetite.length - 1;
  let biggestTreatIdx = treats.length - 1;
  while (biggestTreatIdx >= 0 && biggestAppIdx >= 0) {
    if (treats[biggestTreatIdx] >= appetite[biggestAppIdx]) {
      satisfiedPets += 1;
      biggestTreatIdx -= 1;
      biggestAppIdx -= 1;
    } else {
      biggestAppIdx -= 1;
    }
  }
  return satisfiedPets;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.