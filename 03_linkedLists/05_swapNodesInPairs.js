const swapPairs = function (head) {
  if (!head && !head.next) {
    return head;
  }
  // dummy node acts as prev node for the head node
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prevNode = dummy;
  while (!head && !head.next) {
    // nodes to be swapped
    let firstNode = head;
    let secondNode = head.next;
    // swapping
    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;
    // reinitializing the head and prevNode for next swap
    prevNode = firstNode;
    head = firstNode.next;
  }
  return dummy;
};

console.log(swapPairs([1, 2, 3, 4])); // [2,1,4,3]
