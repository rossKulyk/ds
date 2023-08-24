const twoSum = function (nums, target) {
  // One-pass Hash Table. Time complexity: O(n), SC: O(n)
  // let map = {};
  // for (let i = 0; i < nums.length; i++) {
  //   let currNum = nums[i];
  //   let diff = target - currNum;
  //   if (diff in map) {
  //     return [i, map[diff]];
  //   } else {
  //     map[currNum] = i;
  //   }
  // }
  // return -1;
  //
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    map.set(nums[i], i);
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
console.log(twoSum([3, 3], 6)); //[0,1]
