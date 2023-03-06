// A PREFIX SUM IS A GREAT TOOL WHENEVER A PROBLEM INVOLVES SUMS OF A SUBARRAY.

// A prefix sum is a technique that can be used with integer arrays.
// The idea is to create an array prefix where prefix[i] is the sum of all elements up to the index i (inclusive).
// => PREFIX SUMS ALLOW US TO FIND THE SUM OF ANY SUBARRAY.
// It only costs in O(1). If we want the sum of the subarray from i to j (inclusive),
// then the answer is prefix[j] - prefix[i - 1], or prefix[j] - prefix[i] + nums[i]
// if you don't want to deal with the out of bounds case when i = 0.

// // // Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit,
// // // return a boolean array that represents the answer to each query.
// // // A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.
// const answerQueries = function (nums, queries, limit) {
//   // console.log("NUMs: ", nums);
//   // console.log("QUERIES ", queries);
//   let prefix = [nums[0]];
//   // console.log("prefix_start: ", prefix);
//   for (let i = 1; i < nums.length; i++) {
//     // console.log("nums[i]: ", nums[i]);
//     // console.log("prefix[prefix.length - 1]: ", prefix[prefix.length - 1]);
//     prefix.push(nums[i] + prefix[prefix.length - 1]);
//     // console.log("prefix_UPDATE: ", prefix);
//   }
//   console.log("prefix_FINAL: ", prefix);
//   let ans = [];
//   for (const [x, y] of queries) {
//     console.log("prefix[y]: ", prefix[y]);
//     console.log("prefix[x]: ", prefix[x]);
//     console.log("nums[x]: ", nums[x]);
//     let curr = prefix[y] - prefix[x] + nums[x];
//     console.log("CURR: ", curr);
//     ans.push(curr < limit);
//   }
//   // console.log("FINAL: ", ans);
//   return ans;
// };

// console.log(
//   answerQueries(
//     [1, 6, 3, 2, 7, 2],
//     [
//       [0, 3],
//       [2, 5],
//       [2, 4],
//     ],
//     13
//   )
// );

// // Example 2: Given an integer array nums, find the number of ways to split the array into two parts
// // so that the first section has a sum greater than or equal to the sum of the second section.
// // The second section should have at least one number.
// const waysToSplitArray = function (nums) {
//   let prefix = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     prefix.push(nums[i] + prefix[prefix.length - 1]);
//     console.log("UPDATED_PREFIX: ", prefix);
//   }

//   let ans = 0;
//   for (let i = 0; i < nums.length - 1; i++) { // nums.length - 1 => can't split at last index
//     let leftSection = prefix[i];
//     let rightSection = prefix[prefix.length - 1] - prefix[i];
//     if (leftSection >= rightSection) {
//       ans++;
//     }
//   }
//   return ans;
// };
// // improve to O(1) space while still leveraging the idea of a prefix sum by simply calculating leftSection on the fly.
// // The right section's sum must be the total sum minus the left section.
// var waysToSplitArray = function(nums) {
//   let ans = 0, leftSection = 0, total = 0;
//   for (const num of nums) {
//       total += num;
//   }

//   for (let i = 0; i < nums.length - 1; i++) {
//       leftSection += nums[i];
//       let rightSection = total - leftSection;
//       if (leftSection >= rightSection) {
//           ans++;
//       }
//   }

//   return ans;
// };
// console.log(waysToSplitArray([10, 4, -8, 7])); // Output: 2
// // console.log(waysToSplitArray([2,3,1,0])); // Output: 2

const minStartValue = function (nums) {
  // We use "total" for current step-by-step total, "minVal" for minimum
  // step-by-step total among all sums. Since we always start with
  // startValue = 0, therefore the initial current step-by-step total is 0,
  // thus we set "total" and "minVal" be 0.
  var minVal = 0;
  var total = 0;

  // Iterate over the array and get the minimum step-by-step total.
  for (var i = 0; i < nums.length; ++i) {
    total += nums[i];
    // console.log("total:", total);
    // minVal = Math.min(minVal, total);
    minVal = Math.min(total, minVal);
    // console.log("minVal:", minVal);
  }

  // We have to let the minimum step-by-step total equals to 1,
  // by increasing the startValue from 0 to -minVal + 1,
  // which is just the minimum startValue we want.
  return -minVal + 1;
};
console.log(minStartValue([1, -2, -3]));
// console.log(minStartValue([1,2]))
