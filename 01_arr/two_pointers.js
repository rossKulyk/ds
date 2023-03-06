//
// const reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     console.log("_S >", s);
//     console.log("=> s[left]:", s[left]);
//     console.log("=> s[right]:", s[right]);
//     let tmp = s[left];
//     console.log("=> tmp === s[left]>", tmp);
//     // s[left++] = s[right];
//     s[left] = s[right];
//     left++;
//     console.log("=> s[left++]:", s[right]);
//     // s[right--] = tmp;
//     s[right] = tmp;
//     right--;
//     console.log("=> s[right--]:", tmp);
//     console.log("UPDATED ARR: ", s);
//   }
//   console.log("@ final>", s);
//   return s;
// };
// console.log(reverseString(["h", "e", "l", "l", "o"]));

// 2.Approach 1: Recursion, In-Place, O(N)\mathcal{O}(N)O(N) Space
// Does in-place mean constant space complexity?
// No. By definition, an in-place algorithm is an algorithm which transforms input using no auxiliary data structure.
// The tricky part is that space is used by many actors, not only by data structures. The classical example is to use
// recursive function without any auxiliary data structures. Is it in-place? Yes.
// Is it constant space? No, because of recursion stack.
// const reverseStringRec = function (s) { // TODO:
//   const helper = (left, right) => {
//     while (left < right) {
//       s[left], (s[right] = s[right]), s[left];
//       helper(left + 1, right - 1);
//     }
//   };
//   helper(0, s.length - 1);
// };
// console.log(reverseStringRec(["h", "e", "l", "l", "o"]));
