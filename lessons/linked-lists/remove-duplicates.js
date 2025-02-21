// Write a function `removeDuplicates` that removes all
// nodes with duplicate values from a sorted linked list,
// leaving only distinct values from the original list.
// The function should take the head of the sorted linked
// list as input and return the modified list. The list
// should remain sorted after removing duplicates. If the
// list becomes empty after removing all duplicates,
// return null.

// Example:
// Input: head = [1, 2, 2, 3, 3, 4, 5, 5]
// Output: [1, 4]
// Explanation: The values 2, 3, and 5 appear multiple times, so
//              they are removed. Only 1 and 4 remain as unique
//              values.

// set current = head
// use dummy to point to current
// loop over linked list
//    set next = current.next
//    while current.val = next.val
//        current = next
//        next = next.next
//    set current = next

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}


// Better version
function removeDuplicates(head) {
  let dummy = new ListNode();
  let prev = dummy;
  let curr = head;
  dummy.next = curr;

  while (curr !== null && curr.next !== null) {
    if (curr.val !== curr.next.val) {
      prev = curr;
      curr = curr.next;
    } else {
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }
      curr = curr.next;
      prev.next = curr;
    }
  }

  return dummy.next;
}

/*
function removeDuplicates(head) {
  let current = isDuplicate(head) ? getNextNonDuplicate(head) : head;
  let dummy = new ListNode(0);
  dummy.next = current;
  while (current !== null && current.next !== null) {
    if (isDuplicate(current.next)) {
      current.next = getNextNonDuplicate(current);
    }
    current = current.next;
  }
  return dummy.next;
}

function isDuplicate(head) {
  if (head.next === null) return false;
  return head.val === head.next.val;
}

function getNextNonDuplicate(head) {
  let next = head;
  do {
    next = next.next;
    if (next === null) return null;
  } while (head.val === next.val);
  if (isDuplicate(next)) {
    next = getNextNonDuplicate(next.next);
  }
  return next;
}
*/

let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
let list2 = createLinkedList([1, 1, 1, 2, 3]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([1, 1, 1, 1, 1]);
let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);

printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
printLinkedList(removeDuplicates(list4)); // Expected: null
printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null