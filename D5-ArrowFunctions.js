// Objective
// In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

// Task
// Complete the function in the editor. It has one parameter: an array, nums.
// It must iterate through the array performing one of the following actions on each element:

// * If the element is even, multiply the element by 2.
// * If the element is odd, multiply the element by 3.
// The function must then return the modified array.

function modifyArray(nums) {
  const arrowFunc = (number) => {
    let control = number % 2 == 0 ? number * 2 : number * 3;
    return control;
  };
  let modifiedArray = nums.map(arrowFunc);
  return modifiedArray;
}


