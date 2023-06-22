// Stack approach. TC: O(n+m), SC: O(n+m) n/m->len of n/m input
var backspaceCompare = function (s, t) {
  const compare = (str) => {
    let stack = [];
    for (let c of str) {
      if (c === "#") {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
    return stack.join("");
  };
  return compare(s) === compare(t);
};
// var backspaceCompare = function(s, t) {
//     //Iterate through the string in reverse. If we see a backspace character
//     // the next non-backspace character is skipped. If a character isn't skipped
//     // it is part of the final answer.
//     // Two pointers approach. SC: O(1) TC: O(m+n) n/m len of s/t
//     let i= s.length-1, j= t.length-1;
//     let intS=0, intT=0;

//     while(i>=0 || j>= 0){
//         while (i >= 0) { // Find position of next possible char in (S)
//             if(s[i]==="#"){
//                 intS++, i--;
//             }else if(intS> 0){
//                 intS--, i--;
//             }else{
//                 break
//             }
//         }
//         while (j >= 0) { // Find position of next possible char in (T)
//             if(s[j]==="#"){
//                 intT++, j--;
//             }else if(intT> 0){
//                 intT--, j--;
//             }else{
//                 break
//             }
//         }
//         // If two characters are different return false
//         if(i>=0 && j>= 0 && s[i]!== t[j]){
//             return false
//         }
//         // If expecting to compare char vs nothing
//         if ((i >= 0) != (j >= 0)){
//             return false
//         }
//         i--; j--;
//     }
//     return true
// }
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false
