// Given a 2D array nums that contains n arrays of distinct integers,
// return a sorted array containing all the numbers that appear in all n arrays.
// Ex: For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], return [3, 4]. 3 and 4 are the only numbers that are in all arrays.

const intersection = (nums) => {
  // let map = new Map();
  let obj = {}; // count the frequency of elements
  for (let arr of nums) {
    // map.set(nums[arr], (map.get(nums[arr]) || 0) + 1)
    for (let num of arr) {
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    }
  }
  let answer = [];
  let l = nums.length;
  for (let [key, val] of Object.entries(obj)) {
    if (val === l) {
      answer.push(Number(key));
    }
  }
  return answer.sort((a, b) => a - b);
};
// To populate our hash map, it costs O(n*m) to iterate over all the elements. Then, there can be at most 'm' elements insode
// 'answer' when we perform sort(), which means in the worst case, the sort will cost O(m*log m) Time compelixty and Space
// compexity of O(n*m)
console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
); // [3,4]
