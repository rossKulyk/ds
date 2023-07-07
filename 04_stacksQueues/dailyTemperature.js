// Monotonic Stack approach. TC:O(n^2), SC: O(n)
// Monotonic stack - stack where the elements are always in sorted order. Monotonic stacks are a good option
// when a problem involves comparing the size of numeric elements, with their order being relevant.
// var dailyTemperatures = function(temperatures) {
//     let ans = new Array(temperatures.length).fill(0);
// let stack = [];
// for(let i=0; i<temperatures.length; i++){
//     console.log("TEMP[i]: ", temperatures[i]);
//     while(stack.length && temperatures[stack[stack.length-1]] < temperatures[i]){
//         console.log(" temperatures[stack[stack.length-1]]: ", temperatures[stack[stack.length-1]]);

//         let j = stack.pop();
//         ans[j] = i - j;
//         console.log(" @: ", ans);
//     }
//     stack.push(i)
//     console.log(">>>: ", stack);
// }
// return ans;
// }

// Iterative approach. TC:O(n^2), SC: O(n)
// var dailyTemperatures = function(temperatures) {
//     let ans = new Array(temperatures.length).fill(0);
//     for(let today=0; today<temperatures.length; today++){
//         // console.log("today: ", today)
//         for(let nextDay=today+1; nextDay<temperatures.length; nextDay++){
//             // console.log(" nextDay: ", nextDay)
//             if(temperatures[today] < temperatures[nextDay]){
//                 ans[today] = nextDay - today;
//                 // console.log("   ans[today]: ", ans[today], " BREAK");
//                 break
//             }
//         }
//     }
//     // console.log("ANS: ", ans)
//     return ans;
// }

// Optimized Space approach. TC: O(n), SC: O(1)
var dailyTemperatures = function (temperatures) {
  let l = temperatures.length;
  let hottest = 0;
  let ans = new Array(l).fill(0);
  for (let today = l - 1; today >= 0; today--) {
    let currTemp = temperatures[today];
    // check if the current day is the hottest one seen so far
    if (currTemp > hottest) {
      hottest = currTemp;
      // console.log("  >> IF_.hottest: ", hottest);
      continue;
    }
    let days = 1;

    while (temperatures[today + days] <= currTemp) {
      days += ans[today + days];
    }
    ans[today] = days;
    // console.log("4. ans: ", ans, ", TODAY(i):", today, ", days:", days);
  }
  return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); //[1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); //[1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])); //[1,1,0]
