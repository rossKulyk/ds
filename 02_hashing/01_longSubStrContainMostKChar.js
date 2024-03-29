// You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.
// Ex: For example, given s = "eceba" and k = 2, return 3. The longest substring with at most 2 distinct characters is "ece".

// Using hash map can check the constraint in O(1)
const findLongestSubstring = (str, k) => {
  let counts = new Map(); // keep count of the characters in the window.
  let left = 0;
  let ans = 0;

  for (let right = 0; right < str.length; right++) {
    counts.set(str[right], (counts.get(str[right]) || 0) + 1);
    // console.log("COUNTS:", counts);
    while (counts.size > k) {
      counts.set(str[left], counts.get(str[left]) - 1);
      if (counts.get(str[left]) === 0) {
        counts.delete(str[left]); // character is no longer part of the window, delete the key
      }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
console.log(findLongestSubstring("eceba", 2)); // 3
