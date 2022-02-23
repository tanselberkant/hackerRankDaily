// Objective

// Complete the getSecondLargest function in the editor below.
// getSecondLargest has the following parameters:
//   * int nums[n]: an array of integers

// Returns
// int: the second largest number in nums

function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0];
  let second = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      second = largest;
      largest = nums[i];
      continue;
    }
    if (nums[i] > second && nums[i] < largest) {
      second = nums[i];
    }
  }
  return second;
}
