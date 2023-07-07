const containsDuplicate = function (nums) {
  // Linear Search. Time complexity: O(n2); Space complexity: O(1)
  // for(let i=0; i<nums.length-1; i++){
  //     for(let j=i+1; j<nums.length; j++){
  //         if(nums[i]===nums[j]) return true
  //     }
  // }
  // return false;

  // Sorting: Time complexity: O(n log n); Space complexity: O(1)
  // nums.sort();
  // for(let i=0; i< nums.length-1; i++){
  //     if(nums[i]=== nums[i+1]) return true
  // }
  // return false;

  // Hash Table: Time complexity: O(n); Space complexity: O(1)
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = true;
    }
  }
  return false;
  // let set = new Set()
  // for(let num of nums){
  //     if(set.has(num)) return true;
  //     set.add(num)
  // }
  // return false;
};
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
