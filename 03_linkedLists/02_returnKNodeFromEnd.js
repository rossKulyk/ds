// Given the head of a linked list and an integer k, return the K node from the end.
// For example, given the linked list that represents 1 -> 2 -> 3 -> 4 -> 5 and k = 2,
// return the node with value 4, as it is the 2nd node from the end.
// O(n) time and O(1) space
const findNode = (node, k) => {
  let slow = head;
  let fast = head;
  // separate two pointers by a gap of K
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;

  // Length counting approach. TC: O(n), SC: O(1)
  // let lenCount = 0;
  // let curHead = head;
  // while (curHead) {
  //   curHead = curHead.next;
  //   lenCount++;
  // }
  // let middleNode = Math.floor(lenCount / 2);
  // curHead = head;
  // for (let i = 0; i < middleNode; i++) {
  //   curHead = curHead.next;
  // }
  // return curHead;
};
