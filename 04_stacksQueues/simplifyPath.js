// TC: O(n), SC: O(n)
const simplifyPath = function (path) {
  let stack = [];
  for (let c of path.split("/")) {
    if (c === "..") {
      stack.pop();
    } else if (c === "") {
      continue;
    } else {
      stack.push(c);
    }
  }
  return "/" + stack.join("/");
};
console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/home//foo/")); // "/home/foo"
