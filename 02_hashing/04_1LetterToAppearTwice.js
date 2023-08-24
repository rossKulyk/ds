const repeatedCharacter = function (s) {
  // Time complexity: O(n), SC: O(n)
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return s[i];
    } else {
      set.add(s[i]);
    }
  }
  return "";
};
console.log(repeatedCharacter("abccbaacz")); // c
console.log(repeatedCharacter("abcdd")); // d
