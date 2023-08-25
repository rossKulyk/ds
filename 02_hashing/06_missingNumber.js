var missingNumber = function (nums) {
  // // Sorting approach. TC: O(nLog), SC: O(n)
  // nums = nums.sort();
  // if (nums[0] !== 0) return 0;
  // if (nums[nums.length - 1] !== nums.length) return nums.length;
  // for (let i = 1; i < nums.length; i++) {
  //   let expected = nums[i - 1] + 1;
  //   // console.log("1.nums[i]: ", nums[i]);
  //   // console.log(" 2.exp: ", expected);
  //   if (expected !== nums[i]) return expected;
  // }
  // return false;
  // ---------------
  // TC: O(n), SC: O(n)
  nums.sort((a, b) => a - b);
  let set = new Set(nums);
  let l = nums.length + 1;

  for (let i = 0; i < l; i++) {
    if (!set.has(i)) return i;
  }
  return -1;
};
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
