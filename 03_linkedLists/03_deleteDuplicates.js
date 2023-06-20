const deleteDuplicates = (head) => {
  // Straight forward approach. TC: O(n), SC: O(1)
  let currNode = head;
  while (currNode && currNode.next) {
    if (currNode.val === currNode.next.val) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  return head;
  // 2: TC: O(n), SC: O(1)
  // while (currNode && currNode.next) {
  //   let nextNode = currNode.next;
  //   while (nextNode && nextNode.val === currNode.val) {
  //     nextNode = nextNode.next;
  //   }
  //
  //   currNode.next = nextNode;
  //   currNode = nextNode;
  // }
  // return head;
};

console.log(deleteDuplicates([1, 1, 2]));
console.log(deleteDuplicates([1, 1, 2, 3, 3]));
