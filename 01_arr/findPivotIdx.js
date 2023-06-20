// Given an array of integers nums, calculate the pivot index of this array.
var pivotIndex = function (nums) {
  let totalLeft = 0;
  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let totalRight = prefix[prefix.length - 1] - prefix[i];
    if (totalLeft === totalRight) {
      return i;
    }
    totalLeft += curr;
  }
  return -1;

  // let prefix = [nums[0]];
  // let left = 0;
  // for (let i = 1; i < nums.length; i++) {
  //   prefix.push(nums[i] + prefix[prefix.length - 1]);
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   // let right=prefix[prefix.length-1]-left-nums[i];
  //   let right = prefix[prefix.length - 1] - prefix[i];
  //   console.log("> RIGHT: ", right);

  //   if (left === right) {
  //     return i;
  //   }
  //   left += nums[i];
  // }
  // return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
