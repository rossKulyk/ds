// Stack approach: TC: O(n), SC: O(n) n->is len of input
// The stack maintains the order for us. The main observation needed to recognize the stack solution is
// that the most recently seen character is the first one that needs to be deleted.
const removeDuplicates = function (s) {
  let stack = [];
  for (let c of s) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
};
console.log(removeDuplicates("abbaca")); // "ca"
console.log(removeDuplicates("azxxzy")); // "ay"
