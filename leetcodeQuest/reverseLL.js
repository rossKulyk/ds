//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseList = function (head) {
  console.log(".   HEAD > ", head, ", HEAD.next > ", head?.next);
  // let curr = head;
  let prev = null,
    next = null;
  while (head.next) {
    next = head.next;
  }
  // if(!head || !head.next){
  //     console.log("..... RETURN ....")
  // console.log("")

  //     return head;
  // }
  // let reversedSublist = reverseList(head.next);
  // console.log(" > RETURNED SUBLIST: ",reversedSublist, ", HEAD:",head)
  // console.log("  >> HEAD:",head, " && HEAD.next:",head.next, " && HEAD_NEXT_NEXT:",head.next.next)
  // // head.next - refers to the last node of the sublist, so next.next need to point to the head to append our node to the end
  // head.next.next = head; //
  // head.next = null; // last node of the reverse list & need to point to null
  // console.log("@@@@ FINAL SUBLIST: ",reversedSublist, "&& HEAD:",head)
  // console.log("------- END ---------------")
  // return reversedSublist;

  // Iterative
  // if(!head)return head;
  // let curr = head;
  // while(head?.next){// 1-> 2 -> 3 -> 4 -> 5
  //     let nextNode = head.next;
  //     console.log("1) CURR", curr," ,.nextNode > ", nextNode, ", nextNode.NEXT: ",nextNode.next,", HEAD: ",head,", HEAD.NEXT: ",head.next)

  //     head.next = nextNode.next;
  //     console.log(" 2. HEAD: ",head, ", nextNode: ", nextNode, ", nextNode.NEXT: ", nextNode.next)

  //     nextNode.next = curr;
  //     console.log("  3. nextNode.next: ",nextNode.next, ", nextNode: ", nextNode)
  //     curr = nextNode;
  //     console.log("   4. CURR: ", curr)
  //     console.log(" ")
  // }
  // return curr
  //
  // Iterative approach
  // let prev = null;
  // let next = null;
  // while(head){
  //     next = head.next;
  //     head.next = prev;
  //     prev = head;
  //     head = next;
  // }
  // return prev
};
console.log(reverseList([1, 2, 3, 4, 5])); //
console.log(reverseList([1, 2])); // [2,1]
console.log(reverseList([]));
