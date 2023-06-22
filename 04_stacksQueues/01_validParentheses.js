// The "correct" order is determined by whatever the previous opening bracket was.
// Whenever there is a closing bracket, it should correspond to the most recent opening bracket.
// The order is last in first out (LIFO) - the last opening bracket we saw is the 1st one should be closed.
// TC: O(n) n=>size of input array, SC: O(n)
const isValid = function (s) {
  const matching = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let br = s[i];
    if (br in matching) {
      if (stack.length && stack[stack.length - 1] === matching[br]) stack.pop();
    } else {
      stack.push(br);
    }
  }
  return stack.length === 0;

  // const matching = {
  //     "(" : ")",
  //     "[" : "]",
  //     "{" : "}",
  // }
  // for(let c of s){
  //     console.log(` < ${c} > `)
  //     if(c in matching){
  //         console.log(" >>> c to push: ",c)
  //         stack.push(c)
  //         console.log(" >>> stack: ", stack)
  //     }else{
  //         if(!stack.length) return false;
  //         let prev = stack.pop();
  //         console.log("2. ELSE PREV: ",prev)
  //         if(matching[prev]!==c){
  //             return false
  //         }
  //     }
  // }
  // return stack.length===0;
};
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("[]")); // true
