// Like two pointers, sliding windows work the same with arrays and strings - the
// important thing is that they're iterables with ordered elements
// A sliding window is actually implemented using two pointers! First, let's start by looking at the concept of a subarray.
// Given an array, a subarray is just a section of the array. The elements need to be contiguous and in order.
// Another name for subarray in this context is "window".
// The idea behind the sliding window technique is to efficiently find the "best" window that fits some constraint.
// Usually, the problem description will define what makes a window "better" (shorter length, larger sum etc.) and the constraint.

// Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k.
// const findLength = function (nums, k) {
//   let left = 0,
//     curr = 0,
//     ans = 0;
//   for (let right = 0; right < nums.length; right++) {
//     curr += nums[right];
//     // console.log("nums[right]: ", nums[right]);
//     while (curr > k) {
//       curr -= nums[left];
//       left++;
//     }
//     // console.log("CURR: ", curr);
//     ans = Math.max(ans, right - left + 1);
//     // console.log("ANS: ", ans);
//   }
//   // console.log("FINAL: ", ans);
//   return ans;
// };
// console.log(findLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8));

// // You are given a binary substring s (a string containing only "0" and "1"). An operation involves flipping a "0" into a "1".
// // What is the length of the longest substring containing only "1" after performing at most one operation?
// const findSubstring = function (str) {
//   let ans = 0;
//   let curr = 0;
//   let left = 0;
//   for (let right = 0; right < str.length; right++) {
//     if (str[right] === "0") {
//       curr++;
//     }
//     while (curr > 1) {
//       if (str[left] === "0") {
//         curr--;
//       }
//       left++;
//     }
//     ans = Math.max(ans, right - left + 1);
//   }
//   return ans;
// };
// console.log(findSubstring("1101100111"));

// NUMBER OF SUBARRAYS ---------------->
// Subarray Product Less Than K.
// Given an array of positive integers nums and an integer k, return the number of contiguous subarrays
// where the product of all the elements in the subarray is strictly less than k. Key idea: Whenever you see
// a problem asking for the number of subarrays, think of this: at each index, how many valid subarrays end at this index?
// const numSubarrayProductLessThanK = function (nums, k) {
//   if (k <= 1) return 0;
//   let ans = 0;
//   let left = 0;
//   let curr = 1;
//   for (let right = 0; right < nums.length; right++) {
//     curr *= nums[right];
//     // console.log("CURR:",curr);
//     // console.log("RIGHT:",right);
//     // console.log("NUMS[right]:",nums[right]);
//     while (k <= curr) {
//       curr /= nums[left];
//       // console.log("while_curr:",curr);
//       // console.log("while_nums[left]:",nums[left]);
//       left++;
//       // console.log("while_left:",left);
//     }
//     ans += right - left + 1; // calculate size of the window
//     // console.log("=> ANS:",ans);
//   }
//   return ans;
// };
// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));

// FIXED WINDOW SIZE ----------------->
// Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.
// first approach
const findBestSubarray = function (nums, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }
  console.log("CURR: ", curr);
  let ans = curr;
  for (let i = k; i < nums.length; i++) {
    console.log("nums[i]: ", nums[i]);
    console.log("nums[i - k]: ", nums[i - k]);
    curr += nums[i] - nums[i - k];
    console.log("UPDATED_CURR: ", curr);
    ans = Math.max(ans, curr);
  }
  return ans;
};
// second approach
// function fn(arr, k):
//     curr = some data type to track the window
//     ans = answer variable
//     for i in range(len(arr)):
//         if i >= k:
//             Update ans
//             Remove arr[i - k] from window
//         Add arr[i] to window

//     Update ans
//     return ans // Alternatively, you could do something like return max(ans, curr) if the problem is asking for a maximum value and curr is tracking that.
// console.log(findBestSubarray([1, 12, -5, -6, 50, 3], 4));
console.log(findBestSubarray([3, -1, 4, 12, -8, 5, 6], 4));



// var longestOnes = function(nums, k) {
//   let curr=0, ans=0, left=0;
//   for(let right=0; right<nums.length;right++){
//       if(nums[right]==="0"){
//           curr++
//       }
//       while(curr>k){
//           if(nums[left]==="0"){
//               curr--;
//           }
//           left++;
//       }
//       ans = Math.max(ans, right-left+1)
//   }
//   return ans
// };

// var waysToSplitArray = function(nums) {
//   let prefix = [nums[0]];
//   for(let i=1; i<nums.length; i++){
//       prefix.push(nums[i] + prefix[prefix.length-1]);
//       console.log("UPDATED_PREFIX: ", prefix);
//   }
//   let answer = 0;
//   for(let i=0; i<nums.length-1; i++){
//       let left = prefix[i];
//       let right = prefix[prefix.length-1] - prefix[i];
//       if(left >= right){
//           answer++
//       }
//   }
//   return answer;
// };

    // let left=0;
    // let curr =0;
    // let ans=0;
    // for(let right=0; right<nums.length; right++){
    //     if(nums[right]===0){
    //         curr++;
    //     }
    //     while(curr>k){
    //         if(nums[left]===0){
    //             curr--;
    //         }
    //         left++
    //     }
    //     ans=Math.max(ans, right-left+1);
    // }
    // return ans;