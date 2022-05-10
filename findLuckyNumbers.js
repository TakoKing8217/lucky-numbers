const luckyNumbers = (n) => {
  let tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let nums = [];
  let returnNums = [];
  for (let i = 0; i < n; i++) {
    nums.push(
      tenNumbers.splice(Math.floor(Math.random() * tenNumbers.length), 1)
    );
    returnNums.push(nums[i][0]);
  }
  return returnNums;
};

console.log(luckyNumbers(7));

// I once I add. Array Methods
