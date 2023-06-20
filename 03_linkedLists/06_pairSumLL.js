var pairSum = function (head) {
  // Approach list of integers. TC:O(n), SC:O(n)
  let arr = [],
    curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let i = 0,
    j = arr.length - 1,
    ans = 0;
  while (i < j) {
    // iterate over arr using 2-pointer technique
    ans = Math.max(ans, arr[i] + arr[j]);
    i++, j--;
  }
  return ans;
};
// var pairSum = function(head) {
//   // Reverse 2nd half in place. TC: O(n), SC: O(1)
//   let slow = head;
//   let fast = head;
//   while(fast && fast.next){
//       slow=slow.next;
//       fast=fast.next.next
//   }

//   let prev = null;
//   while(slow){
//       let nextNode = slow.next;
//       slow.next= prev;
//       prev=slow;
//       slow= nextNode;
//   }
//   let start= head, ans =0;
//   while(prev){
//       ans = Math.max(ans, start.val+prev.val);
//       prev = prev.next;
//       start = start.next
//   }
//   return ans;
// };
console.log(swapPairs([5, 4, 2, 1])); // 6
console.log(swapPairs([4, 2, 2, 3])); // 7
