// Given the head of a linked list, determine if the linked list has a cycle.
// There is a cycle in a linked list if there is some node in the list that can
// be reached again by continuously following the next pointer.

const hasCycle = function (head) {
  // 1. Two pinters(fast/slow) approach. O(n) time and O(1) space
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    if (slow.next === fast.next.next) return true;
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;

  // // Two pinters(fast/slow) approach. O(n) time and O(1) space
  // let slow = head;
  // let fast = head;
  // while(fast && slow){
  // // if true, than inside the cycle
  //     if (!fast || !fast.next) return false
  //     if (fast.next == slow) return true

  //     fast = fast.next.next
  //     slow = slow.next
  // }
  // return false;

  // // 3. Hash Table approach: O(n) time and O(n) space
  // if the LL doesn't have a cycle, will reach null and finish;
  // if the LL has a cycle, will visit a node twice
  // let seen = {};
  // while (head) {
  //   console.log(seen);
  //   if (seen[head]) {
  //     return true;
  //   }
  //   seen[head] = true;
  //   head = head.next;
  // }
  // return false;
};
console.log(hasCycle([3, 2, 0, -4])); // true
console.log(hasCycle([1, 2])); // true
console.log(hasCycle([[1]])); // false
