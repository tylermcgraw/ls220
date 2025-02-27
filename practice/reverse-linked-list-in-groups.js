/**
 * Given a linked list, reverse the nodes of the list k at a time and return the modified list.
 * If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
 * 
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 * 
 * @param {ListNode} head - The head of the linked list
 * @param {number} k - The size of each group to reverse
 * @return {ListNode} - The head of the modified list
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// Algorithm
// Set dummy.next = head
// Set prev = dummy
// Set cur = head
// Check if k > # of nodes left
// If so reverse next k nodes
// Set start = cur
// Repeat
//    Set next = cur.next
//    Set next.next = cur
//    Set cur = next
// Set prev.next = cur
// Set start.next = cur.next

function reverseKGroup(head, k) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  while (nodesLeft(cur, k)) {
    let start = cur;
    let end = cur.next;
    for (let idx = 1; idx < k; idx += 1) {
      let next = end;
      end = next.next;
      next.next = cur;
      cur = next;
    }
    prev.next = cur;
    start.next = end;
    prev = cur;
    cur = cur.next;
  }
  return dummy.next;
}

function nodesLeft(cur, k) {
  for (let idx = 0; idx < k; idx += 1) {
    if (cur === null) return false;
    cur = cur.next;
  }
  return true;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current) {
      result.push(current.val);
      current = current.next;
  }
  return result;
}

// Test cases
console.log(linkedListToArray(reverseKGroup(createLinkedList([1,2,3,4,5]), 2))); // Expected output: [2,1,4,3,5]
console.log(linkedListToArray(reverseKGroup(createLinkedList([1,2,3,4,5]), 3))); // Expected output: [3,2,1,4,5]
console.log(linkedListToArray(reverseKGroup(createLinkedList([1,2,3,4,5]), 1))); // Expected output: [1,2,3,4,5]
console.log(linkedListToArray(reverseKGroup(createLinkedList([1]), 1))); // Expected output: [1]