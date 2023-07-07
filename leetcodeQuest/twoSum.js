const twoSum = function (nums, target) {
  // nums.sort((a,b) => a-b)
  // let left =0, right = nums.length-1;
  // while(left<right){
  //     if(nums[left] + nums[right]===target){
  //         return [left, right]
  //     }
  //     if(nums[left] + nums[right]>target){
  //         right--
  //     }
  //     if(nums[left] + nums[right]<target){
  //         left++
  //     }
  //     // right--;
  //     // left++
  // }
  // return [];

  // // Approach: Brute Force. Time complexity: O(N2), Space complexity: O(1)
  // for(let i=0; i< nums.length; i++){
  //     for(let j= i+1; j<nums.length; j++){
  //         let sum = nums[i]+nums[j];
  //         if(sum===target){
  //             return [i, j]
  //         }
  //     }
  // }
  // return null;

  // Approach: Two-pass Hash Table.
  // Time complexity: O(N), Space complexity: O(N)
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    if (diff in obj) {
      return [obj[diff], i];
    } else {
      obj[num] = i;
    }
  }
  return null;
};

// const twoSum = function(nums, target) {

//  const twoSum = function(nums, target) {
//      let map = new Map();
//      for(let i=0; i<nums.length; i++){
//          let diff=target-nums[i];
//          if(map.has(diff)) {
//             console.log(".  HAS: ", diff)
//              return [i, map.get(diff)];
//          }
//         map.set(nums[i], i);
//      }
//      return null; }
//     //  }
// };
console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); //[0,1]
