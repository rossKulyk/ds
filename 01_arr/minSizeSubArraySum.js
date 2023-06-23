const minSubArrayLen = function (target, nums) {
  console.log("NUMS: ", nums, ", TARGET: ", target);
  // Sliding window approach. TC:O(n), SC:O(1)
  // let ans=Infinity, left=0, curr=0;
  // for(let right=0; right<nums.length; right++){
  //     curr+=nums[right];
  //     console.log("CURR:", curr, ", nums[right]: ", nums[right])
  //     while(curr >= target){
  //         curr-= nums[left];
  //         ans = Math.min(ans, right-left+1)
  //         left++
  //     }
  //     console.log("> ans: ", ans, ", left:", left, ", right:",right, ", CURR: ",curr)
  // }
  // return ans===Infinity ? 0 : ans;

  // 1.----------------Time complexity: O(n3); Space Complexity: O(1)
  // let n = nums.length;
  // let ans= Infinity;
  // let loop=1
  // for(let i=0; i<n; i++){
  //     console.log(">>>>>: ", loop++)
  //     console.log("[i]: ", [i])
  //     console.log("nums[i]: ", nums[i])
  //     for(let j=0; j<n; j++){
  //         console.log(" 2.[j]: ", [j])
  //         console.log(" 2.nums[J]: ", nums[j])
  //         let sum = 0;
  //         console.log(" 2.sum: ", sum)
  //         for(let k=i; k<=j; k++){
  //             console.log("  3.[K]: ", [k])
  //             console.log("  3.nums[K]: ", nums[k])
  //             sum+=nums[k];
  //             console.log("  3.sum: ", sum)
  //         }
  //         if(sum>=target){
  //             console.log("   3.IF_sum: ", sum, "> TARGET: ", target, )
  //             ans=Math.min(ans, j-i+1);
  //             break
  //         }
  //     }
  // }
  // return ans!==Infinity ? ans : 0

  // 2.------------ Time complexity: O(n2); Space Complexity: O(n)
  // let l=nums.length;
  // let ans = Infinity;
  // let sums=[];
  // sums[0]=nums[0];
  // for(let i=1; i<l; i++){
  //     sums[i]=sums[i-1]+nums[i];
  // }
  // for(let i=0; i<l; i++){
  //     for(let j=0; j<l; j++){
  //         let sum = sums[j]-sums[i]+nums[i];
  //         if(sum>=target){
  //             ans = Math.min(ans, j-i+1);
  //             break;
  //         }
  //     }
  // }
  // return ans!==Infinity ? ans : 0;
  // return ans===Infinity ? 0 : ans;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); //2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
