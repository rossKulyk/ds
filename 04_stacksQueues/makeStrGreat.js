var makeGood = function (s) {
  console.log("S: ", s);
  // Stack approach. TC: O(n), SC: O(n)
  // let stack=[];
  // for(let c of s){
  //     if(stack.length && Math.abs(stack[stack.length-1].codePointAt() - c.codePointAt())===32){
  //         stack.pop()
  //     }else{
  //         stack.push(c)
  //     }
  // }
  // return stack.join("")

  // Iteration approach. TC: O(n^2), SC: O(n)
  while (s.length > 1) {
    let find = false; // records if we find any pair to remove.
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      let nextChar = s[i + 1];
      // console.log("> char: ", char, ", nextChar: ", nextChar);
      // console.log(
      //   ">> char: ",
      //   char?.charCodeAt(),
      //   ", nextChar: ",
      //   nextChar?.charCodeAt()
      // );
      // console.log("> Math.abs(char-nextChar): ",Math.abs(char.charCodeAt() - nextChar.charCodeAt()))
      // If make a pair => remove them from 's' and 'find = true'.
      if (
        nextChar &&
        Math.abs(char.charCodeAt() - nextChar.charCodeAt()) === 32
      ) {
        s = s.substring(0, i) + s.substring(i + 2);
        find = true;
        break;
      }
    }
    // If cannot find any pair to remove => break the loop.
    if (!find) break;
  }
  return s;
};
