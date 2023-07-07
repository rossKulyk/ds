// const maxProfit = function (prices) {
//     let highest = 0;
//     let buy = 1;
//     let sell = 0;
//     console.log("- prices -> ", prices)
//     while(sell < prices.length && buy < prices.length){
//         if(prices[sell] < prices[buy]){
//             let profit = prices[buy] - prices[sell];
//             if(profit > highest) highest=profit
//         }else if(prices[sell] > prices[buy]){
//             sell++
//         }
//         buy++;
//     }
//     return highest
// };

const maxProfit = function (prices) {
  // One pass approach: TC/SC: O(n)
  // let min = Number.MAX_VALUE;
  // // let min = prices[0]
  // let profit = 0;
  // for(let i=0; i<prices.length; i++){
  //     if(prices[i] < min){
  //         min = prices[i]
  //     }
  //     if(prices[i] - min > profit){
  //         profit = prices[i]-min;
  //     }
  // }
  // return profit;

  // Brute force approach. TC: O(n^2) SC: O(1)
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (max < profit) {
        max = profit;
      }
    }
  }
  return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
