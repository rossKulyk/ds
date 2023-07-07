const maxSubArray = function (nums) {
  // // Brute-force. Time complexity: O(n2) && Space complexity: O(1)
  let maxSubArr = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currSubArr = 0;
    for (let j = i; j < nums.length; j++) {
      currSubArr += nums[j]; //calculate the sum of the current subarray
      maxSubArr = Math.max(maxSubArr, currSubArr);
    }
  }
  return maxSubArr;

  // DP. Time complexity: O(n), Space complexity: O(1)
  // let currSub = nums[0];
  // let maxSub = nums[0];
  // for(let i=1; i<nums.length; i++){
  //     let num = nums[i];
  //     currSub = Math.max(num, currSub+num);
  //     maxSub = Math.max(currSub, maxSub)
  //     // console.log("CURR: ", currSub)
  //     // console.log("MAX: ", maxSub)
  // }
  // return maxSub;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([1])); //1
console.log(maxSubArray([5, 4, -1, 7, 8])); //23
