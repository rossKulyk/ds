// string reversal
// const reverseStr = (input) => {
//   debugger;
//   if (input === "") {
//     return "";
//   }
//   return reverseStr(input.substring(1)) + input.charAt(0);
// };
// console.log(reverseStr("hello"));

// decimal to binary:
// 233//2=116, rem = 1; 116/2=58, rem=0; 58//2=29, rem=0; 29//2=14, rem=1;
// 14//2=7, rem=0; 7//2=3,rem=1; 3//2=1, rem=1; 1//2=0, rem=1 =>
// all rem backwards = 11101001
// const decimaToBinary = (decimal, result) => {
//   debugger;
//   if (decimal === 0) {
//     return result;
//   }
//   console.log("BEFORE_RESULT:", result);
//   console.log("decimal:", decimal);
//   console.log("decimal % 2:", decimal % 2);
//   result = Math.round(decimal % 2) + result;
//   console.log("AFTER_RESULT:", result);
//   return decimaToBinary(Math.round(decimal / 2), result);
// };
// console.log(decimaToBinary(233, ""));

// sum of natural numbers
// const recursiveSummation = (inputNum) => {
//   debugger;
//   if (inputNum <= 1) {
//     return inputNum;
//   }
//   return inputNum + recursiveSummation(inputNum - 1);
// };
// console.log(recursiveSummation(5));

//
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  debugger;
  if (n in memoize) {
    return memoize[n];
  } else {
    console.log("n: ", n);
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    console.log("memoize[n]: ", memoize[n]);
    console.log("memoize: ", memoize);
    return memoize[n];
  }
}
console.log("=>", getNthFib(5));
