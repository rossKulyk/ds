// The time complexity of this algorithm is O(n) where n is the # of nodes in LL, the space complexity is O(1)
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next; // 1st, don't lose the next node
    curr.next = prev; // reverse the direction of the pointer
    prev = curr; // set the current node to prev for the next node
    curr = nextNode; // move to the next node
  }
  return prev;
};
